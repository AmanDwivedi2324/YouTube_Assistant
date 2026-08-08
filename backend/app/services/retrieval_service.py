from app.services.pinecone_service import pinecone_index

def search_chunks(
        query: str,
        video_id: str,
        top_k:int=3,
        namespace:str = "youtube"
):
    
    results = pinecone_index.search(
        namespace=namespace,
        query={
            "inputs":{
                "text":query
            },
            "top_k":top_k,
            "filter":{
                "video_id": video_id
            }
        }
    )

    return [
        {
            "score": hit["_score"],
            "text": hit["fields"]["text"],
            "video_id": hit["fields"]["video_id"]
        }
        for hit in results["result"]["hits"]
    ]