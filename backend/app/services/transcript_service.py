from youtube_transcript_api import YouTubeTranscriptApi 
from langchain_core.documents import Document 

def get_transcript_documents(video_id: str):
    api = YouTubeTranscriptApi()
    transcript = api.fetch(video_id)

    documents = []

    for index, item in enumerate(transcript):
        doc = Document(
            page_content=item.text,
            metadata={
                "video_id":video_id,
                "chunk_index": index,
                "start_time":item.start,
                "duration":item.start + item.duration,
                "source": "youtube"
            }
        )

        documents.append(doc)
        
    return documents







# to get actual script from raw response 


# from youtube_transcript_api import YouTubeTranscriptApi

# video_id = "T89BLjI5Row"

# api = YouTubeTranscriptApi()

# transcript = api.fetch(
#     video_id,
#     languages=["en"]
# )

# text = " ".join(
#     snippet.text
#     for snippet in transcript
# )

# print(text)