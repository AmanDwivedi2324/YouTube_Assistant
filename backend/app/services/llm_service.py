from langchain_google_genai import ChatGoogleGenerativeAI
import os

llm = ChatGoogleGenerativeAI(
    model="gemini-3.6-flash",
    google_api_key=os.getenv("GOOGLE_API_KEY"),
    temperature=0
)

def generate_answer(prompt):
    response = llm.invoke(prompt)

    content = response.content
    if isinstance(content,str):
        return content
    
    if isinstance(content,list):
        return "".join(
            item["text"] for item in content if item.get("type") == "text"
        )
    return str(content) 