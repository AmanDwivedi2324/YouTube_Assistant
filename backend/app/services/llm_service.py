from langchain_google_genai import ChatGoogleGenerativeAI

llm = ChatGoogleGenerativeAI(
    model="gemini-3.6-flash",
    temperature=0
)

def generate_response(message:str):
    response = llm.invoke(message)
    return response.content 