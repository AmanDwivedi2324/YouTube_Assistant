import { useState } from 'react'

import { getThumbnail, getVideoUrl } from '../data/videos'

/*
 * Details for the video that is currently selected.
 *
 * variant="full"    -> empty chat state: details + starter questions
 * variant="compact" -> collapsible summary above an ongoing conversation
 */

const VideoDetails = ({ video, onAsk, variant = 'full', disabled }) => {
  const [imageFailed, setImageFailed] = useState(false)

  const thumbnail = imageFailed ? null : (
    <img
      src={getThumbnail(video)}
      alt=""
      onError={() => setImageFailed(true)}
      className="h-full w-full object-cover"
    />
  )

  if (variant === 'compact') {
    return (
      <details className="group rounded-xl border border-white/10 bg-white/[0.03]">
        <summary className="flex cursor-pointer list-none items-center gap-3 p-3 text-sm text-slate-300 marker:hidden focus-visible:outline-2 focus-visible:outline-red-300">
          <div className="h-9 w-16 shrink-0 overflow-hidden rounded-md bg-slate-900">
            {thumbnail}
          </div>

          <span className="min-w-0 flex-1 truncate font-medium text-white">
            {video.title}
          </span>

          <span className="shrink-0 text-xs text-slate-500 group-open:hidden">
            Details
          </span>
          <span className="hidden shrink-0 text-xs text-slate-500 group-open:inline">
            Hide
          </span>
        </summary>

        <div className="border-t border-white/10 p-4">
          <p className="text-xs text-slate-500">
            {video.channel} · {video.published}
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            {video.summary}
          </p>

          <a
            href={getVideoUrl(video)}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-xs font-medium text-red-300 hover:text-red-200"
          >
            Watch on YouTube ↗
          </a>
        </div>
      </details>
    )
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
        <div className="aspect-video bg-slate-900">
          {thumbnail || (
            <div className="flex h-full items-center justify-center text-4xl text-slate-700">
              ▶
            </div>
          )}
        </div>

        <div className="p-5">
          <span className="rounded-full bg-red-500/10 px-2.5 py-1 text-[11px] font-medium text-red-300">
            {video.category}
          </span>

          <h2 className="mt-3 font-display text-xl font-bold leading-snug text-white">
            {video.title}
          </h2>

          <p className="mt-1.5 text-xs text-slate-500">
            {video.channel} · {video.published}
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            {video.summary}
          </p>

          <ul className="mt-3 space-y-1">
            {video.highlights.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-6 text-slate-500">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-red-400/70" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href={getVideoUrl(video)}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-xs font-medium text-red-300 hover:text-red-200"
          >
            Watch on YouTube ↗
          </a>
        </div>
      </div>


      <p className="mt-6 text-sm font-medium text-slate-300">
        Try asking
      </p>

      <div className="mt-2 flex flex-col gap-2">
        {video.questions.map((item) => (
          <button
            key={item}
            onClick={() => onAsk(item)}
            disabled={disabled}
            className="rounded-xl border border-white/10 px-4 py-3 text-left text-sm text-slate-300 transition hover:border-red-400/40 hover:bg-red-500/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default VideoDetails
