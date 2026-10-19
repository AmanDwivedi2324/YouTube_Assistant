import { useState } from 'react'

import { getThumbnail } from '../data/videos'

const VideoCard = ({ video, onSelect }) => {
  const [imageFailed, setImageFailed] = useState(false)

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/20 focus-within:border-red-400/50">
      {/* Thumbnail */}

      <div className="relative aspect-video overflow-hidden bg-slate-900">
        {imageFailed ? (
          <div className="flex h-full w-full items-center justify-center text-3xl text-slate-700">
            ▶
          </div>
        ) : (
          <img
            src={getThumbnail(video)}
            alt=""
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        )}

        <span className="absolute left-3 top-3 rounded-full bg-slate-950/80 px-2.5 py-1 text-[11px] font-medium text-slate-200 backdrop-blur">
          {video.category}
        </span>
      </div>


      {/* Details */}

      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 text-[15px] font-semibold leading-snug text-white">
          {video.title}
        </h3>

        <p className="mt-1.5 text-xs text-slate-500">
          {video.channel} · {video.published}
        </p>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-400">
          {video.summary}
        </p>

        <ul className="mt-3 space-y-1">
          {video.highlights.map((item) => (
            <li key={item} className="flex gap-2 text-xs leading-5 text-slate-500">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-red-400/70" />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-5">
          <button
            onClick={() => onSelect(video)}
            className="w-full rounded-xl bg-red-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300"
          >
            Ask about this video
          </button>
        </div>
      </div>
    </article>
  )
}

export default VideoCard
