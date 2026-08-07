from app.services.pinecone_services import pinecone_index

print(type(pinecone_index))

print(
    [
        method for method in dir(pinecone_index) if "search" in method.lower()
    ]
)


# ['search', 'search_records'] (pinecone provides these two search related methods)