from pydantic import BaseModel, HttpUrl

class VideoIngestRequest(BaseModel):
    youtube_url:HttpUrl