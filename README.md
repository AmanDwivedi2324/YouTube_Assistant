# YouTube Assistant

An AI-powered **YouTube RAG chatbot** that allows users to ask questions about a YouTube video and receive answers based strictly on the video's transcript.

## Overview

YouTube Assistant uses **Retrieval-Augmented Generation (RAG)** to transform YouTube video transcripts into a searchable knowledge base.

The user provides a **YouTube URL and a question**. The application extracts the video ID and checks whether the video has already been processed.

If it hasn't been processed, the system automatically:

1. Fetches the transcript
2. Splits it into smaller chunks
3. Stores the chunks in Pinecone
4. Retrieves the most relevant chunks for the user's question
5. Sends the retrieved context to Google Gemini
6. Generates a grounded answer

If the required information is not present in the video context, the assistant does not make up an answer.

## Architecture

```text
                    User
                     │
                     ▼
          YouTube URL + Question
                     │
                     ▼
             Extract Video ID
                     │
                     ▼
            Check Pinecone
              /          \
           Exists       New Video
             │             │
             │             ▼
             │       Fetch Transcript
             │             │
             │             ▼
             │          Chunking
             │             │
             │             ▼
             │          Pinecone
             │             │
             └──────┬──────┘
                    ▼
            Semantic Retrieval
                    │
                    ▼
             Relevant Chunks
                    │
                    ▼
              Google Gemini
                    │
                    ▼
             Grounded Answer


# RAG Pipeline

YouTube URL
    ↓
Video ID Extraction
    ↓
Transcript Extraction
    ↓
Document Creation
    ↓
Recursive Text Splitting
    ↓
Embeddings
    ↓
Pinecone Vector Database
    ↓
Similarity Search
    ↓
Relevant Transcript Chunks
    ↓
Prompt + Context
    ↓
Gemini
    ↓
Final Answer


# Project Structure

YouTube_Assistant/
│
├── backend/
│   │
│   ├── app/
│   │   ├── api/
│   │   │   └── routes/
│   │   │       ├── chat.py
│   │   │       └── video.py
│   │   │
│   │   ├── services/
│   │   │   ├── transcript_service.py
│   │   │   ├── chunking_service.py
│   │   │   ├── pinecone_service.py
│   │   │   ├── video_service.py
│   │   │   ├── retrieval_service.py
│   │   │   └── rag_service.py
│   │   │
│   │   ├── testing/
│   │   │   ├── test_transcript.py
│   │   │   ├── test_chunking.py
│   │   │   ├── test_pinecone.py
│   │   │   ├── test_retrieval.py
│   │   │   ├── test_prompt.py
│   │   │   └── test_rag.py
│   │   │
│   │   └── main.py
│   │
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   ├── package.json
│   ├── Dockerfile
│   └── .env
│
├── docker-compose.yml
└── README.md



