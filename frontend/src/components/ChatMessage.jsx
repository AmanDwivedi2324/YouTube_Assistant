import React from 'react'

const ChatMessage = ({ type, content }) => {

  const isUser = type === 'user'


  return (
    <div
      className={`flex w-full ${
        isUser ? 'justify-end' : 'justify-start'
      }`}
    >

      <div
        className={`flex max-w-[90%] gap-3 sm:max-w-[75%] ${
          isUser ? 'flex-row-reverse' : 'flex-row'
        }`}
      >

        {/* Avatar */}

        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
            isUser
              ? 'bg-red-500 text-white'
              : 'border border-white/10 bg-white/5 text-slate-300'
          }`}
        >
          {isUser ? 'You' : 'AI'}
        </div>


        {/* Message */}

        <div>

          <div
            className={`mb-1 text-xs font-medium ${
              isUser
                ? 'text-right text-slate-500'
                : 'text-slate-500'
            }`}
          >
            {isUser ? 'You' : 'YouTube AI'}
          </div>


          <div
            className={`rounded-2xl px-4 py-3 ${
              isUser
                ? 'rounded-tr-md bg-red-500 text-white'
                : 'rounded-tl-md border border-white/10 bg-white/[0.04] text-slate-200'
            }`}
          >

            <p className="whitespace-pre-wrap text-sm leading-6">
              {content}
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ChatMessage