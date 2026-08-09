import React from 'react'

const Header = ({ youtubeUrl, onNewVideo }) => {
  return (
    <header className="shrink-0 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500 text-white shadow-lg shadow-red-500/20">
            <span className="text-sm">▶</span>
          </div>

          <div>
            <h1 className="text-sm font-semibold text-white sm:text-base">
              YouTube AI
            </h1>

            <p className="hidden text-xs text-slate-500 sm:block">
              Video Intelligence Assistant
            </p>
          </div>

        </div>


        {/* Right side */}

        <div className="flex items-center gap-3">

          {youtubeUrl && (
            <div className="hidden items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 sm:flex">

              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>

              <span className="max-w-[180px] truncate text-xs font-medium text-emerald-300">
                Video connected
              </span>

            </div>
          )}


          {youtubeUrl && (
            <button
              onClick={onNewVideo}
              className="rounded-lg border border-white/10 px-3 py-2 text-xs font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              <span className="hidden sm:inline">
                + New Video
              </span>

              <span className="sm:hidden">
                +
              </span>
            </button>
          )}

        </div>

      </div>

    </header>
  )
}

export default Header