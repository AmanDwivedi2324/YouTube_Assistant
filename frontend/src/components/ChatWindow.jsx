import { useEffect, useRef, useState } from 'react'

import ChatMessage from './ChatMessage'
import VideoDetails from './VideoDetails'

const ChatWindow = ({ video, messages, loading, onAsk }) => {

  const bottomRef = useRef(null)

  const [slow, setSlow] = useState(false)


  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
    })

  }, [messages, loading])


  /*
   * Free-tier hosting goes to sleep when idle, so the first
   * request can take a while. Tell the user instead of leaving
   * them with a spinner.
   */

  useEffect(() => {

    if (!loading) {
      return undefined
    }

    const timer = setTimeout(() => setSlow(true), 8000)

    return () => {
      clearTimeout(timer)
      setSlow(false)
    }

  }, [loading])


  if (messages.length === 0 && !loading) {
    return (
      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6">

        <VideoDetails video={video} onAsk={onAsk} disabled={loading} />

      </div>
    )
  }


  return (
    <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6">

      <div className="mx-auto flex max-w-4xl flex-col gap-6">

        <VideoDetails video={video} variant="compact" />


        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            type={message.type}
            content={message.content}
            isError={message.isError}
          />
        ))}


        {loading && (

          <div className="flex items-start gap-3">

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs text-slate-300">
              AI
            </div>

            <div>

              <div className="mb-1 text-xs font-medium text-slate-500">
                YouTube AI
              </div>

              <div className="rounded-2xl rounded-tl-md border border-white/10 bg-white/[0.04] px-4 py-3">

                <div className="flex items-center gap-2" role="status" aria-label="Thinking">

                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-500"></span>

                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-slate-500"
                    style={{ animationDelay: '150ms' }}
                  ></span>

                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-slate-500"
                    style={{ animationDelay: '300ms' }}
                  ></span>

                </div>

                {slow && (
                  <p className="mt-2 max-w-xs text-xs leading-5 text-slate-500">
                    The free server may be waking up. The first answer can
                    take up to a minute.
                  </p>
                )}

              </div>

            </div>

          </div>

        )}


        <div ref={bottomRef} />

      </div>

    </div>
  )
}

export default ChatWindow
