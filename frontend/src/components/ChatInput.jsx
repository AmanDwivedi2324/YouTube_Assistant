import React from 'react'

const ChatInput = ({
  question,
  setQuestion,
  onSubmit,
  loading,
}) => {

  const handleKeyDown = (event) => {

    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()

      if (!loading) {
        onSubmit()
      }
    }

  }


  return (
    <div className="shrink-0 border-t border-white/10 bg-slate-950/95 px-4 py-3 backdrop-blur-xl sm:px-6">

      <div className="mx-auto max-w-4xl">

        <div className="relative flex items-end rounded-2xl border border-white/10 bg-white/[0.04] p-2 transition focus-within:border-white/20">

          <textarea
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            onKeyDown={handleKeyDown}
            disabled={loading}
            rows={1}
            placeholder="Ask something about the video..."
            className="max-h-32 min-h-11 flex-1 resize-none bg-transparent px-3 py-2.5 text-sm leading-5 text-white outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50"
          />


          <button
            onClick={onSubmit}
            disabled={loading || !question.trim()}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500 text-white transition hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-40"
            title="Send message"
          >

            {loading ? (

              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>

            ) : (

              <span className="text-lg">
                ↑
              </span>

            )}

          </button>

        </div>


        <p className="mt-2 text-center text-[11px] text-slate-600">
          Press Enter to send · Shift + Enter for a new line
        </p>

      </div>

    </div>
  )
}

export default ChatInput