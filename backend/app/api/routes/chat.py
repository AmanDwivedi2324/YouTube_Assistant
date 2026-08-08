from fastapi import APIRouter
from pydantic import BaseModel

from app.services.rag_service import answer_question

router = APIRouter()

class ChatRequest(BaseModel):
    video_id:str
    question:str 

@router.post("/chat")
def chat(request: ChatRequest):

    answer = answer_question(request.question,video_id=request.video_id)

    return {
        "video_id": request.video_id,
        "question": request.question,
        "answer": answer
    }