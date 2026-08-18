# 🎥 YouTube Assistant

> An AI-powered RAG chatbot that lets users ask questions about YouTube videos and receive answers grounded in the video's transcript.

## 🚀 Overview

**YouTube Assistant** is a full-stack Generative AI application built using **Retrieval-Augmented Generation (RAG)**.

Users provide a YouTube URL and ask questions about the video. The application automatically extracts the transcript, splits it into chunks, stores the data in **Pinecone**, retrieves the most relevant context for each question, and uses **Google Gemini** to generate a grounded answer.

If the requested information is not available in the video context, the assistant avoids making up an answer.

## 🔄 How It Works

```text
YouTube URL + Question
        ↓
   Extract Video ID
        ↓
   Check Pinecone
        ↓
 ┌──────┴──────┐
 │             │
Exists       New Video
 │             │
 │       Fetch Transcript
 │             ↓
 │          Chunking
 │             ↓
 │          Pinecone
 │             │
 └──────┬──────┘
        ↓
 Semantic Retrieval
        ↓
 Relevant Transcript Chunks
        ↓
      Gemini LLM
        ↓
   Grounded Answer



🛠️ Tech Stack

Frontend

React
Vite
Tailwind CSS

Backend

Python
FastAPI
Uvicorn

AI / RAG

LangChain
Google Gemini
Pinecone
YouTube Transcript API

Deployment

Docker
Docker Compose
Render
✨ Features
🎬 Ask questions about YouTube videos
🔗 Accept YouTube URLs directly
📝 Automatic transcript extraction
✂️ Transcript chunking with overlapping chunks
🔎 Semantic search using Pinecone
🧠 Gemini-powered contextual answers
♻️ Avoids re-processing already indexed videos
📌 Video-specific retrieval using video_id
💬 Conversational chat interface
🛡️ Context-grounded responses
🚫 Handles questions outside the video's context
📱 Responsive frontend
🐳 Dockerized application
☁️ Cloud deployment ready
🧠 RAG Pipeline
YouTube URL
    ↓
Video ID Extraction
    ↓
Transcript Extraction
    ↓
LangChain Documents
    ↓
Recursive Text Splitting
    ↓
Embeddings
    ↓
Pinecone Vector Database
    ↓
Similarity Search
    ↓
Relevant Context
    ↓
Prompt Construction
    ↓
Google Gemini
    ↓
Final Answer
🏗️ Project Structure
YouTube_Assistant/
│
├── backend/
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
│   │   │   ├── retrieval_service.py
│   │   │   ├── rag_service.py
│   │   │   └── video_service.py
│   │   │
│   │   ├── testing/
│   │   └── main.py
│   │
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md
⚙️ Local Setup
1. Clone the repository
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd YouTube_Assistant
2. Backend
cd backend


python -m venv .venv

Activate the virtual environment.

Windows:

.venv\Scripts\activate

Install dependencies:

pip install -r requirements.txt

Create a .env file inside backend/:

GOOGLE_API_KEY=your_google_api_key
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_INDEX_NAME=your_pinecone_index_name

Start the backend:

uvicorn app.main:app --reload

Backend:

http://localhost:8000

API documentation:

http://localhost:8000/docs
3. Frontend

Open another terminal:

cd frontend
npm install
npm run dev

Frontend:

http://localhost:5173
🐳 Run with Docker

From the project root:

docker compose up --build

Docker Compose starts the application services together.

🔐 Environment Variables

Create the required environment variables locally:

GOOGLE_API_KEY=
PINECONE_API_KEY=
PINECONE_INDEX_NAME=

Never commit API keys or .env files to GitHub.

💡 Example

User asks:

What does the speaker say about following others?

The system retrieves the relevant transcript chunks and Gemini generates an answer based on that context.

If the user asks something unrelated, such as:

Who is Virat Kohli?

and the information isn't present in the video transcript, the assistant responds that it could not find the answer in the provided video context instead of using unrelated knowledge.

📌 Important

The application depends on an available YouTube transcript. Videos without a usable transcript cannot be processed.

🎯 What This Project Demonstrates

This project demonstrates an end-to-end Generative AI application combining:

React
  +
FastAPI
  +
LangChain
  +
RAG
  +
Embeddings
  +
Pinecone
  +
Gemini
  +
Docker
  +
Cloud Deployment

It showcases how unstructured YouTube video content can be transformed into a searchable and conversational knowledge source.

👨‍💻 Author

Aman Dwivedi

AI/ML Engineer | Generative AI & Agentic Systems | Backend & Full-Stack Engineering
