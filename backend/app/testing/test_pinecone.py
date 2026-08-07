from app.services.transcript_service import get_transcript_document
from app.services.chunking_service import split_documents
from app.services.pinecone_services import upsert_chunks

video_id = "9syVtJb7GTc"

#fetch transcript
document = get_transcript_document(video_id)
print(document)
print("Transcript fetched")


#chunk transcript
chunks = split_documents([document])
print(chunks[0])
print(f"chunks created :  {len(chunks)}")

#upload chunks to pinecone
count = upsert_chunks(chunks)
print(f"Uploaded records :  {count}")