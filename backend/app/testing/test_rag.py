from app.services.rag_service import answer_question

question = "What does the speaker say about following others?"

answer = answer_question(question)

print("\nFinal Answer:\n")
print(answer)