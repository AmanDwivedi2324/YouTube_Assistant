from dotenv import load_dotenv
load_dotenv()
from app.services.embedding_service import embeddings

text = "Langchain helps us build RAG applications."

vector = embeddings.embed_query(text)

print("Vector type : ", type(vector))
print("Vector dimension : ", len(vector))
print("First 10 values : ", vector[:10])
