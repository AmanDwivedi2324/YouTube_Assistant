import React from 'react'

const VideoInput = ({
  youtubeUrl,
  setYoutubeUrl,
  onSubmit,
  loading,
}) => {

  return (
    <div className="w-full max-w-xl">

      <div className="mb-6 text-center">

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-2xl">
          ▶
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Chat with a YouTube video
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Paste a YouTube URL and start asking questions about
          its content.
        </p>

      </div>


      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-5">

        <label className="mb-2 block text-sm font-medium text-slate-300">
          YouTube URL
        </label>


        <input
          type="url"
          value={youtubeUrl}
          onChange={(event) => setYoutubeUrl(event.target.value)}
          disabled={loading}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !loading) {
              onSubmit()
            }
          }}
          placeholder="https://www.youtube.com/watch?v=..."
          className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-red-400/50 focus:ring-2 focus:ring-red-400/10 disabled:cursor-not-allowed disabled:opacity-50"
        />


        <button
          onClick={onSubmit}
          disabled={loading || !youtubeUrl.trim()}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-red-400 disabled:cursor-not-allowed disabled:opacity-40"
        >

          {loading ? (

            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>
              Connecting...
            </>

          ) : (

            <>
              Start Chat
              <span>→</span>
            </>

          )}

        </button>

      </div>

    </div>
  )
}

export default VideoInput