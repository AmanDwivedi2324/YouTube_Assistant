from youtube_transcript_api import YouTubeTranscriptApi 

def get_transcript(video_id : str):
    api = YouTubeTranscriptApi()
    transcript = api.fetch(video_id)

    return transcript







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