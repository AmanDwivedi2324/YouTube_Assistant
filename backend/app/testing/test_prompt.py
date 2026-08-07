from app.services.prompt_service import rag_prompt

context = """I'm not like them. I don't follow and i don't bend. A different code in a human soul."""
question = "What does the speaker say about following others?"

prompt_value = rag_prompt.invoke({
    "context": context,
    "question":question
})

print(prompt_value)