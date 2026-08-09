import React from 'react'
import ChatMessage from './ChatMessage'

const ChatWindow = ({ messages }) => {
  if (messages.length === 0) {
    return null
  }

  return (
    <section className="mt-8 space-y-4">

      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          type={message.type}
          content={message.content}
        />
      ))}

    </section>
  )
}

export default ChatWindow