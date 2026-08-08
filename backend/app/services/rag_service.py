from app.services.retrieval_service import search_chunks
from app.services.prompt_service import rag_prompt
from app.services.llm_service import generate_answer

def answer_question(
        question:str,
        video_id:str,
        top_k:int=3
):
    
    #Retrieve relevant chunks

    chunks = search_chunks(
        query=question,
        video_id=video_id,
        top_k=top_k
    )

    print("\nRetrieved chunks:")
    for chunk in chunks:
        print("Score:", chunk["score"])
        print("Text:", chunk["text"][:200])
        print("-" * 50)


    #Build context

    context = "\n\n".join(
        chunk["text"] for chunk in chunks 
    )

    #Create prompt

    prompt = rag_prompt.invoke({
        "context":context,
        "question":question 
    })


    #Generate answer

    answer = generate_answer(prompt)

    return answer