from langchain_community.document_loaders import YoutubeLoader
from app.services.chunking_service import split_documents

loader = YoutubeLoader.from_youtube_url(
    "https://youtu.be/T89BLjI5Row?si=Dn-fTDovDf161kEy",
    add_video_info=False
)

documents = loader.load()

chunks = split_documents(documents)

print(f"Original documents : {len(documents)}")
print(f"Chunks : {len(chunks)}")

print(f"\nfirst chunk: \n")
print(chunks[0].page_content)

print("\nMetadata: \n")
print(chunks[0].metadata)

print(f"\n second chunk: \n")
print(chunks[1].page_content)

print("\nMetadata: \n")
print(chunks[1].metadata)

print(f"\n third chunk: \n")
print(chunks[2].page_content)

print("\nMetadata: \n")
print(chunks[2].metadata)