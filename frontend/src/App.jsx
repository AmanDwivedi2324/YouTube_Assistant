import React, { useState } from 'react'

import Header from './components/Header'
import VideoInput from './components/VideoInput'
import ChatWindow from './components/ChatWindow'
import ChatInput from './components/ChatInput'

import { askQuestion } from './services/api'


const App = () => {

  const [youtubeUrl, setYoutubeUrl] = useState('')

  const [question, setQuestion] = useState('')

  const [messages, setMessages] = useState([])

  const [loading, setLoading] = useState(false)

  const [videoConnected, setVideoConnected] = useState(false)


  /*
   * Initial video setup
   */

  const handleVideoSubmit = async () => {

    if (!youtubeUrl.trim()) {
      return
    }

    setVideoConnected(true)

  }


  /*
   * Ask question
   */

  const handleQuestionSubmit = async () => {

    if (!youtubeUrl.trim()) {
      return
    }

    if (!question.trim()) {
      return
    }


    const currentQuestion = question.trim()


    // Add user's message immediately

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
          content: error.message || 'Something went wrong.',
        },
      ])

    } finally {

      setLoading(false)

    }

  }


  /*
   * Start a completely new video
   */

  const handleNewVideo = () => {

    setYoutubeUrl('')

    setQuestion('')

    setMessages([])

    setVideoConnected(false)

    setLoading(false)

  }


  /*
   * Initial screen
   */

  if (!videoConnected) {

    return (
      <div className="flex min-h-screen flex-col bg-slate-950">

        <Header
          youtubeUrl=""
          onNewVideo={handleNewVideo}
        />


        <main className="flex flex-1 items-center justify-center px-4 py-10 sm:px-6">

          <VideoInput
            youtubeUrl={youtubeUrl}
            setYoutubeUrl={setYoutubeUrl}
            onSubmit={handleVideoSubmit}
            loading={loading}
          />

        </main>


        <footer className="shrink-0 py-5 text-center">

          <p className="text-xs text-slate-700">
            Built with React · FastAPI · Pinecone · Gemini
          </p>

        </footer>

      </div>
    )

  }


  /*
   * Chat screen
   */

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-slate-950">

      <Header
        youtubeUrl={youtubeUrl}
        onNewVideo={handleNewVideo}
      />


      <ChatWindow
        messages={messages}
        loading={loading}
      />


      <ChatInput
        question={question}
        setQuestion={setQuestion}
        onSubmit={handleQuestionSubmit}
        loading={loading}
      />

    </div>
  )
}

export default App