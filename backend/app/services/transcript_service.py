from youtube_transcript_api import YouTubeTranscriptApi
from langchain_core.documents import Document


def get_transcript_document(video_id: str):

    api = YouTubeTranscriptApi()

    transcript = api.fetch(video_id)

    full_text = " ".join(item.text for item in transcript)

    document = Document(
        page_content=full_text,
        metadata={
            "video_id": video_id,
            "start_time": transcript[0].start,
            "end_time": (transcript[-1].start + transcript[-1].duration),
            "source": "youtube"
        }
    )

    return document