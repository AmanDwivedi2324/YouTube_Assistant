import React from 'react'

const Header = () => {
  return (
    <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 text-white shadow-lg shadow-red-500/20">
            <span className="text-lg">▶</span>
          </div>

          <div>
            <h1 className="text-base font-semibold text-white sm:text-lg">
              YouTube AI
            </h1>

            <p className="hidden text-xs text-slate-400 sm:block">
              Intelligent video conversations
            </p>
          </div>

        </div>

        <div className="hidden items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 sm:flex">
          <span className="h-2 w-2 rounded-full bg-emerald-400"></span>

          <span className="text-xs font-medium text-emerald-300">
            AI Online
          </span>
        </div>

      </div>
    </header>
  )
}

export default Header