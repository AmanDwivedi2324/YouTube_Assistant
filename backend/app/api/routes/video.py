from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.services.video_service import ingest_video

router = APIRouter()

class VideoRequest(BaseModel):
    youtube_url:str 

@router.post("/videos")
def process_video(request:VideoRequest):
    try:
        result = ingest_video(request.youtube_url)
        return result
    
    except ValueError as error:
        raise HTTPException(
            status_code=400,
            detail=str(error)
        )