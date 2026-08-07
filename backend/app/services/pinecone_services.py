import os
from dotenv import load_dotenv
from pinecone import Pinecone

load_dotenv()

PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
PINECONE_INDEX_NAME = os.getenv("PINECONE_INDEX_NAME")

if not PINECONE_API_KEY:
    raise ValueError("PINECONE_API_KEY is not set")

if not PINECONE_INDEX_NAME:
    raise ValueError("PINECONE_INDEX_NAME is not set")

pc = Pinecone(api_key=PINECONE_API_KEY)
pinecone_index = pc.Index(PINECONE_INDEX_NAME)

def upsert_chunks(chunks,namespace="youtube"):
    records = []

    for chunk_index, chunk in enumerate(chunks):
        record = {
            "id": f"{chunk.metadata['video_id']}_chunk_{chunk_index}",
            "text":chunk.page_content,
            "video_id":chunk.metadata["video_id"],
            "source":chunk.metadata["source"]
        }

        records.append(record)

    pinecone_index.upsert_records(
        namespace=namespace,
        records=records
    )

    return len(records) 