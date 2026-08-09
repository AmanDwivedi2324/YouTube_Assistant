import React from 'react'

const VideoInput = ({
  youtubeUrl,
  setYoutubeUrl,
  question,
  setQuestion,
  onSubmit,
  loading
}) => {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-6">

      {/* YouTube URL */}

      <div className="mb-5">

        <label className="mb-2 block text-sm font-medium text-slate-200">
          YouTube URL
        </label>

        <div className="relative">

          <input
            type="url"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
            disabled={loading}
            placeholder="https://www.youtube.com/watch?v=..."
            className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-red-400/60 focus:ring-2 focus:ring-red-400/10 disabled:cursor-not-allowed disabled:opacity-60"
          />

        </div>

      </div>


      {/* Question */}

      <div className="mb-5">

        <label className="mb-2 block text-sm font-medium text-slate-200">
          Ask a question
        </label>

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          disabled={loading}
          rows={4}
          placeholder="What is this video about?"
          className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-red-400/60 focus:ring-2 focus:ring-red-400/10 disabled:cursor-not-allowed disabled:opacity-60"
        />

      </div>


      {/* Button */}

      <button
        onClick={onSubmit}
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-red-400 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      >

        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>
            Processing...
          </>
        ) : (
          <>
            Ask Question
            <span>→</span>
          </>
        )}

      </button>

    </section>
  )
}

export default VideoInput