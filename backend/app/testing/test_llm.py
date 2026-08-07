import os
from dotenv import load_dotenv
load_dotenv()

from app.services.llm_service import generate_answer

prompt = """You are a helpful assistant. Answer the following question : What is the capital of India?"""

answer = generate_answer(prompt)

print("Answer is : ", answer)