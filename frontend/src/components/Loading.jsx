import React from 'react'

const Loading = () => {
  return (
    <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">

      <div className="flex items-start gap-4">

        <div className="mt-1 h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-slate-600 border-t-red-400"></div>

        <div>

          <h3 className="text-sm font-semibold text-white">
            Analyzing video...
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-400">
            Fetching the transcript and searching for relevant
            information. This may take a moment for a new video.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Loading