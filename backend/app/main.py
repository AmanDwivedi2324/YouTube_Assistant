from fastapi import FastAPI
from app.api.routes.chat import router as chat_router
from app.api.routes.video import router as video_router

app = FastAPI(
    title="YouTube Assistant API",
    description="RAG-based YouTube chatbot"
)

app.include_router(chat_router)
app.include_router(video_router)
