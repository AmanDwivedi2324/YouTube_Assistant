import { useState } from 'react'

import FreeTierNotice from './FreeTierNotice'
import VideoCard from './VideoCard'

import { VIDEOS, CATEGORIES } from '../data/videos'

/*
 * Landing screen. Replaces the free-form URL box, because only the
 * pre-processed videos can be queried on the free tier.
 */

const VideoLibrary = ({ onSelect }) => {
  const [category, setCategory] = useState('All')

  const visibleVideos =
    category === 'All'
      ? VIDEOS
      : VIDEOS.filter((video) => video.category === category)

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      {/* Intro */}

      <div className="max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Pick a video and ask it anything
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
          Answers come from the video's transcript, so you get what was
          actually said instead of a guess.
        </p>
      </div>


      <div className="mt-6 max-w-3xl">
        <FreeTierNotice />
      </div>


      {/* Filters */}

      <div
        className="mt-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter videos by topic"
      >
        {CATEGORIES.map((item) => {
          const active = item === category

          return (
            <button
              key={item}
              onClick={() => setCategory(item)}
              aria-pressed={active}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300 ${
                active
                  ? 'border-red-400/40 bg-red-500/15 text-red-200'
                  : 'border-white/10 text-slate-400 hover:border-white/20 hover:text-white'
              }`}
            >
              {item}
            </button>
          )
        })}
      </div>


      {/* Grid */}

      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleVideos.map((video) => (
          <VideoCard key={video.id} video={video} onSelect={onSelect} />
        ))}
      </div>


      {/* Locked custom URL */}

      <div className="mt-8 rounded-2xl border border-dashed border-white/10 p-4 sm:p-5">
        <label
          htmlFor="custom-url"
          className="flex items-center gap-2 text-sm font-medium text-slate-400"
        >
          <span aria-hidden="true">🔒</span>
          Use your own video
        </label>

        <input
          id="custom-url"
          type="url"
          disabled
          placeholder="Paste a YouTube link"
          className="mt-3 w-full cursor-not-allowed rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-slate-600 opacity-60"
        />

        <p className="mt-2 text-xs leading-5 text-slate-500">
          Not available on the free version. Run the project yourself with your
          own Gemini and Pinecone keys to process any video that has captions.
        </p>
      </div>
    </div>
  )
}

export default VideoLibrary
