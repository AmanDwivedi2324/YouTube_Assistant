from app.utils.youtube_utils import extract_video_id

url = "https://www.youtube.com/watch?v=LqGGweN7EEk&list=RDLqGGweN7EEk&start_radio=1"

video_id = extract_video_id(url)
print(video_id)