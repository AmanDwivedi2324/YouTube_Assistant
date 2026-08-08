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
        hit["fields"] for hit in results["result"]["hits"]
    ]