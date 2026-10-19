import { useState } from 'react'

import { VIDEOS, FREE_TIER_LIMIT, getThumbnail } from '../data/videos'

/*
 * Lets the user switch between the available videos while chatting.
 * Always visible on large screens, slide-over drawer on small ones.
 */

const SidebarThumb = ({ video }) => {
  const [failed, setFailed] = useState(false)

  return (
    <div className="h-10 w-[72px] shrink-0 overflow-hidden rounded-md bg-slate-900">
      {!failed && (
        <img
          src={getThumbnail(video, 'default')}
          alt=""
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}
    </div>
  )
}

const VideoList = ({ activeId, chats, onSelect }) => (
  <nav aria-label="Available videos" className="flex flex-col gap-1">
    {VIDEOS.map((video) => {
      const active = video.id === activeId
      const asked = (chats[video.id] || []).filter((m) => m.type === 'user').length

      return (
        <button
          key={video.id}
          onClick={() => onSelect(video)}
          aria-current={active ? 'true' : undefined}
          className={`flex items-center gap-3 rounded-xl border p-2 text-left transition focus-visible:outline-2 focus-visible:outline-red-300 ${
            active
              ? 'border-red-400/40 bg-red-500/10'
              : 'border-transparent hover:bg-white/5'
          }`}
        >
          <SidebarThumb video={video} />

          <span className="min-w-0 flex-1">
            <span className="line-clamp-2 text-xs font-medium leading-4 text-slate-200">
              {video.title}
            </span>

            <span className="mt-0.5 block truncate text-[11px] text-slate-500">
              {asked > 0
                ? `${asked} question${asked > 1 ? 's' : ''} asked`
                : video.channel}
            </span>
          </span>
        </button>
      )
    })}
  </nav>
)

const VideoSidebar = ({ activeId, chats, onSelect, open, onClose }) => {
  const handleSelect = (video) => {
    onSelect(video)
    onClose()
  }

  return (
    <>
      {/* Desktop */}

      <aside className="hidden w-72 shrink-0 overflow-y-auto border-r border-white/10 bg-slate-950 p-3 lg:block">
        <p className="px-2 pb-2 pt-1 text-xs font-medium text-slate-500">
          Available videos ({VIDEOS.length} of {FREE_TIER_LIMIT})
        </p>

        <VideoList activeId={activeId} chats={chats} onSelect={onSelect} />
      </aside>


      {/* Mobile drawer */}

      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
            aria-hidden="true"
          />

          <aside
            className="absolute inset-y-0 left-0 w-[85%] max-w-xs overflow-y-auto border-r border-white/10 bg-slate-950 p-3"
            aria-label="Switch video"
          >
            <div className="flex items-center justify-between px-2 pb-2 pt-1">
              <p className="text-xs font-medium text-slate-500">
                Available videos ({VIDEOS.length} of {FREE_TIER_LIMIT})
              </p>

              <button
                onClick={onClose}
                className="rounded-md px-2 py-1 text-xs text-slate-400 hover:bg-white/5 hover:text-white"
              >
                Close
              </button>
            </div>

            <VideoList activeId={activeId} chats={chats} onSelect={handleSelect} />
          </aside>
        </div>
      )}
    </>
  )
}

export default VideoSidebar
