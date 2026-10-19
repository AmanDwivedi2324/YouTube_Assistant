
import { FREE_TIER_LIMIT } from '../data/videos'

const Header = ({ video, onBack, onOpenSidebar }) => {
  return (
    <header className="shrink-0 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">

        {/* Left side */}

        <div className="flex min-w-0 items-center gap-3">

          {video && (
            <button
              onClick={onOpenSidebar}
              className="rounded-lg border border-white/10 px-2.5 py-2 text-xs font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white lg:hidden"
              aria-label="Switch video"
            >
              ☰
            </button>
          )}

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-red-500 text-white shadow-lg shadow-red-500/20">
            <span className="text-sm">▶</span>
          </div>

          <div className="min-w-0">
            <h1 className="truncate text-sm font-semibold text-white sm:text-base">
              YouTube AI
            </h1>

            <p className="hidden truncate text-xs text-slate-500 sm:block">
              {video ? video.title : 'Video Intelligence Assistant'}
            </p>
          </div>

        </div>


        {/* Right side */}

        <div className="flex shrink-0 items-center gap-3">

          <span className="hidden rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs font-medium text-amber-200 md:inline">
            Free version · {FREE_TIER_LIMIT} videos
          </span>

          {video && (
            <button
              onClick={onBack}
              className="rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              <span className="hidden sm:inline">All videos</span>
              <span className="sm:hidden">All</span>
            </button>
          )}

        </div>

      </div>

    </header>
  )
}

export default Header
