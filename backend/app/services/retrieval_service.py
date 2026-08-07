from app.services.pinecone_services import pinecone_index

def search_chunks(
        query:str,
        top_k:int=3,
        namespace:str = "youtube"
):
    
    results = pinecone_index.search_records(
        namespace=namespace,
        query={
            "inputs":{
                "text":query
            },
            "top_k":top_k
        }
    )

    hits = results["result"]["hits"]

    chunks = []

    for hit in hits:
        fields = hit["fields"]

        chunks.append({
            "text":fields.get("text"),
            "video_id": fields.get("video_id"),
            "source": fields.get("source"),
            "score": hit.get("_score")
        })

    return chunks