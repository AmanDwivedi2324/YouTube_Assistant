from app.utils.youtube_utils import extract_video_id

url = "https://youtu.be/9syVtJb7GTc?si=zOt_NSMjGHlotiKK"

video_id = extract_video_id(url)
print(video_id)