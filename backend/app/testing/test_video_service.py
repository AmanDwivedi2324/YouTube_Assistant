from app.services.video_service import ingest_video

youtube_url = "https://youtu.be/nfTfb_TGUV4?si=Ek8xCfDzL7lg1GvN"

result = ingest_video(youtube_url)

print("\n Video ingestion result : ")
print(result)