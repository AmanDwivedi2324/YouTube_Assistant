import os

from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api.proxies import WebshareProxyConfig
from langchain_core.documents import Document


class TranscriptNotFoundError(Exception):
    pass


def get_transcript_document(video_id: str):

    api = YouTubeTranscriptApi(
        proxy_config=WebshareProxyConfig(
            proxy_username=os.getenv("WEBSHARE_PROXY_USERNAME"),
            proxy_password=os.getenv("WEBSHARE_PROXY_PASSWORD"),
        )
    )

    transcript_list = api.list(video_id)

    transcript = None

    # Prefer English
    try:
        transcript = transcript_list.find_transcript(["en"])
    except Exception:
        pass

    # Then Hindi
    if transcript is None:
        try:
            transcript = transcript_list.find_transcript(["hi"])
        except Exception:
            pass

    # Then any available transcript
    if transcript is None:
        transcripts = list(transcript_list)

        if not transcripts:
            raise TranscriptNotFoundError(
                "No transcript available for this video."
            )

        transcript = transcripts[0]

    fetched_transcript = transcript.fetch()

    full_text = " ".join(
        item.text for item in fetched_transcript
    )

    document = Document(
        page_content=full_text,
        metadata={
            "video_id": video_id,
            "start_time": fetched_transcript[0].start,
            "end_time": (
                fetched_transcript[-1].start
                + fetched_transcript[-1].duration
            ),
            "source": "youtube",
            "language": transcript.language_code,
        }
    )

    return document