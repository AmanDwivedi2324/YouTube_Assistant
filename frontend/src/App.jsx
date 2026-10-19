import { useState } from 'react'

import Header from './components/Header'
import FreeTierNotice from './components/FreeTierNotice'
import VideoLibrary from './components/VideoLibrary'
import VideoSidebar from './components/VideoSidebar'
import ChatWindow from './components/ChatWindow'
import ChatInput from './components/ChatInput'

import { askQuestion } from './services/api'
import { getVideoUrl } from './data/videos'


const App = () => {

  // The selected video object from data/videos.js (null = library screen)

  const [video, setVideo] = useState(null)

  const [question, setQuestion] = useState('')

  // One conversation per video, so switching videos keeps each chat

  const [chats, setChats] = useState({})

  const [loadingId, setLoadingId] = useState(null)

  const [sidebarOpen, setSidebarOpen] = useState(false)


  const messages = video ? chats[video.id] || [] : []

  const loading = Boolean(video) && loadingId === video.id


  const addMessage = (videoId, message) => {

    setChats((previous) => ({
      ...previous,
      [videoId]: [...(previous[videoId] || []), message],
    }))

  }


  /*
   * Ask question
   */

  const handleQuestionSubmit = async (text) => {

    const currentQuestion = (text ?? question).trim()

    if (!video || !currentQuestion || loadingId) {
      return
    }

    // Keep the video this question belongs to, even if the user
    // switches videos while the answer is loading.

    const target = video


    addMessage(target.id, {
      type: 'user',
      content: currentQuestion,
    })

    setQuestion('')

    setLoadingId(target.id)


    try {

      const data = await askQuestion(
        getVideoUrl(target),
        currentQuestion
      )

      addMessage(target.id, {
        type: 'assistant',
        content: data.answer,
      })

    } catch (error) {

      addMessage(target.id, {
        type: 'assistant',
        content: error.message || 'Something went wrong. Please try again.',
        isError: true,
      })

    } finally {

      setLoadingId(null)

    }

  }


  const handleSelectVideo = (nextVideo) => {

    setVideo(nextVideo)

    setQuestion('')

  }


  const handleBack = () => {

    setVideo(null)

    setQuestion('')

    setSidebarOpen(false)

  }


  /*
   * Library screen
   */

  if (!video) {

    return (
      <div className="flex min-h-screen flex-col bg-slate-950">

        <Header video={null} />

        <main className="flex-1">

          <VideoLibrary onSelect={handleSelectVideo} />

        </main>

        <footer className="shrink-0 py-5 text-center">

          <p className="text-xs text-slate-600">
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
        video={video}
        onBack={handleBack}
        onOpenSidebar={() => setSidebarOpen(true)}
      />

      <FreeTierNotice variant="compact" />


      <div className="flex min-h-0 flex-1">

        <VideoSidebar
          activeId={video.id}
          chats={chats}
          onSelect={handleSelectVideo}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />


        <div className="flex min-w-0 flex-1 flex-col">

          <ChatWindow
            video={video}
            messages={messages}
            loading={loading}
            onAsk={handleQuestionSubmit}
          />

          <ChatInput
            question={question}
            setQuestion={setQuestion}
            onSubmit={() => handleQuestionSubmit()}
            loading={Boolean(loadingId)}
            videoTitle={video.title}
          />

        </div>

      </div>

    </div>
  )
}

export default App
