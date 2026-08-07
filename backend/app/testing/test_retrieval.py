from app.services.retrieval_service import search_chunks

query = "What is the speaker saying about following others?"

results = search_chunks(
    query=query,
    top_k=3
)

print(results)