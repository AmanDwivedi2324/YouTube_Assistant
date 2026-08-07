from langchain_core.prompts import ChatPromptTemplate

rag_prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        """You are a helpful YouTube video assistant. Answer the user's question using only the provided context from the video.  If the answer cannot be found in the context, say that you could not find the answer in the video. Do not make up information."""
    ),
    (
        "human",
        """Context: {context} 
        Question: {question}"""
    )
])