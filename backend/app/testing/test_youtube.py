from app.utils.youtube_utils import extract_video_id

url = "https://www.youtube.com/watch?v=T89BLjI5Row&list=RDT89BLjI5Row&start_radio=1"

video_id = extract_video_id(url)
print(video_id)