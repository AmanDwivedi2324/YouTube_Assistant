from app.services.transcript_service import get_transcript

video_id = "T89BLjI5Row"

transcript = get_transcript(video_id)

for item in transcript:
    print(item)