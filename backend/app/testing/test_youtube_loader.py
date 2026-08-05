from langchain_community.document_loaders import YoutubeLoader 

youtube_url = "https://youtu.be/T89BLjI5Row?si=dJ8NMoh7KzxabUoh"

loader = YoutubeLoader.from_youtube_url(
    youtube_url,
    add_video_info=True
)

docs = loader.load()

print("Number of documents: ", len(docs))

for doc in docs:
    print("\n -- Content -- ")
    print(doc.page_content)

    print("\n-- Metadata --")
    print(doc.metadata)