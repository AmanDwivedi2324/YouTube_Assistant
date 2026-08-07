from fastapi import FastAPI
from app.api.routes.chat import router as chat_router

app = FastAPI(
    title="YouTube Assistant API",
    description="RAG-based YouTube chatbot"
)

app.include_router(chat_router)

