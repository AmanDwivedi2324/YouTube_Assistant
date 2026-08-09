import React, { useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'

const ChatWindow = ({ messages, loading }) => {

  const bottomRef = useRef(null)


  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
    })

  }, [messages, loading])


  if (messages.length === 0 && !loading) {
    return (
      <div className="flex flex-1 items-center justify-center px-6">

        <div className="max-w-md text-center">

          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl">
            💬
          </div>

          <h2 className="text-lg font-semibold text-white">
            Start the conversation
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Ask anything about the YouTube video. The AI will
            search the video's context before answering.
          </p>

        </div>

      </div>
    )
  }


  return (
    <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6">

      <div className="mx-auto flex max-w-4xl flex-col gap-6">

        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            type={message.type}
            content={message.content}
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

                <div className="flex items-center gap-2">

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