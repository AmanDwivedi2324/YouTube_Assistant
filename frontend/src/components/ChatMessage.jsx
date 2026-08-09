import React from 'react'

const ChatMessage = ({ type, content }) => {
  const isUser = type === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>

      <div
        className={`max-w-[90%] rounded-2xl px-4 py-3 sm:max-w-[75%] ${
          isUser
            ? 'rounded-br-md bg-red-500 text-white'
            : 'rounded-bl-md border border-white/10 bg-white/[0.04] text-slate-200'
        }`}
      >

        <div className="mb-1 text-xs font-semibold opacity-60">
          {isUser ? 'You' : 'AI Assistant'}
        </div>

        <p className="whitespace-pre-wrap text-sm leading-6">
          {content}
        </p>

      </div>

    </div>
  )
}

export default ChatMessage