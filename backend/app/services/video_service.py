from app.services.transcript_service import get_transcript_document
from app.services.chunking_service import split_documents
from app.services.pinecone_service import (upsert_chunks,video_exists)
from app.utils.youtube_utils import extract_video_id



def ingest_video(youtube_url: str):
    video_id = extract_video_id(youtube_url)

    #check whether video was already processed
    if video_exists(video_id):

        return{
             "video_id": video_id,
            "status": "already_processed",
            "message": "This video has already been processed."
        }

    #fetch transcript
    document = get_transcript_document(video_id)

    #create chunks
    chunks = split_documents([document])


    #store chunks in pinecone
    uploaded_count = upsert_chunks(chunks)

    return{
        "video_id": video_id,
        "status": "processed",
        "chunks_created": len(chunks),
        "records_uploaded": uploaded_count
    }


