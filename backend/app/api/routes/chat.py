from fastapi import APIRouter
from pydantic import BaseModel

from app.utils.youtube_utils import extract_video_id
from app.services.rag_service import answer_question
from app.services.pinecone_service import video_exists
from app.services.video_service import ingest_video

router = APIRouter()

class ChatRequest(BaseModel):
    youtube_url:str
    question:str 

@router.post("/chat")
def chat(request: ChatRequest):

    try:
        video_id = extract_video_id(request.youtube_url)

     # Check whether video is already processed
        if not video_exists(video_id):
            ingest_video(request.youtube_url)


        # Now answer using RAG
        answer = answer_question(question=request.question,video_id=video_id)

        return {
            "video_id": video_id,
            "question": request.question,
            "answer": answer
        }
    
    except ValueError as error:
        raise HTTPException(
            status_code=400,
            detail=str(error)
        )
    
    except Exception:
        raise HTTPException(
            status_code=500,
            detail="Something went wrong while processing the request."
        )