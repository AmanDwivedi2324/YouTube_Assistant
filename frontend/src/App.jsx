import React, { useState } from 'react'

import Header from './components/Header'
import VideoInput from './components/VideoInput'
import ChatWindow from './components/ChatWindow'
import Loading from './components/Loading'

import { askQuestion } from './services/api'

const App = () => {

  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [question, setQuestion] = useState('')

  const [messages, setMessages] = useState([])

  const [loading, setLoading] = useState(false)


  const handleSubmit = async () => {

    if (!youtubeUrl.trim()) {
      alert('Please enter a YouTube URL.')
      return
    }

    if (!question.trim()) {
      alert('Please enter a question.')
      return
    }

    const currentQuestion = question

    // Show user question immediately

    setMessages((previous) => [
      ...previous,
      {
        type: 'user',
        content: currentQuestion,
      },
    ])

    setQuestion('')
    setLoading(true)


    try {

      const data = await askQuestion(
        youtubeUrl,
        currentQuestion
      )


      // Add AI response

      setMessages((previous) => [
        ...previous,
        {
          type: 'assistant',
          content: data.answer,
        },
      ])

    } catch (error) {

      setMessages((previous) => [
        ...previous,
        {
          type: 'assistant',
          content: error.message,
        },
      ])

    } finally {

      setLoading(false)

    }
  }


  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <Header />


      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16">

        {/* Hero */}

        <section className="mb-10 text-center">

          <div className="mb-4 inline-flex items-center rounded-full border border-red-400/20 bg-red-400/10 px-3 py-1 text-xs font-medium text-red-300">
            AI-Powered Video Assistant
          </div>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Chat with any
            <span className="text-red-400"> YouTube video</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Paste a YouTube URL and ask questions about the video.
            Our RAG pipeline finds the relevant context before generating
            an answer.
          </p>

        </section>


        {/* Input */}

        <VideoInput
          youtubeUrl={youtubeUrl}
          setYoutubeUrl={setYoutubeUrl}
          question={question}
          setQuestion={setQuestion}
          onSubmit={handleSubmit}
          loading={loading}
        />


        {/* Loading */}

        {loading && <Loading />}


        {/* Chat */}

        <ChatWindow messages={messages} />


        {/* Empty state */}

        {messages.length === 0 && !loading && (

          <div className="mt-12 text-center">

            <p className="text-sm text-slate-500">
              Paste a video above and start asking questions.
            </p>

          </div>

        )}

      </main>


      <footer className="border-t border-white/5 py-6 text-center">

        <p className="text-xs text-slate-600">
          Built with React, FastAPI, Pinecone & Gemini
        </p>

      </footer>

    </div>
  )
}

export default App