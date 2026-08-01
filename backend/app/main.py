from dotenv import load_dotenv
load_dotenv()

from fastapi import FastAPI 
from app.models.chat_model import ChatRequest
from app.services.llm_service import generate_response

app = FastAPI()


@app.get("/")
def home():
    return {"message":"YouTube Chatbot API is running"};

@app.post("/chat")
def chat(request: ChatRequest):
    response = generate_response(request.message)
    return {
        "response": response
    }