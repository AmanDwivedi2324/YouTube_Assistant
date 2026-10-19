
import { FREE_TIER_LIMIT } from '../data/videos'

/*
 * Tells the user why only a fixed set of videos can be used.
 *
 * variant="full"    -> large notice on the video library screen
 * variant="compact" -> slim strip shown above the chat
 */

const InfoIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-5 w-5 shrink-0"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
      clipRule="evenodd"
    />
  </svg>
)

const FreeTierNotice = ({ variant = 'full' }) => {
  if (variant === 'compact') {
    return (
      <div
        role="note"
        className="shrink-0 border-b border-amber-400/15 bg-amber-400/[0.07] px-4 py-2 sm:px-6"
      >
        <div className="mx-auto flex max-w-4xl items-center gap-2 text-amber-200/90">
          <InfoIcon />
          <p className="text-xs leading-5">
            Free version: you can only chat with the {FREE_TIER_LIMIT} videos
            in the list. Switch videos from the sidebar.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div
      role="note"
      className="flex gap-3 rounded-2xl border border-amber-400/20 bg-amber-400/[0.07] p-4 text-amber-100 sm:p-5"
    >
      <span className="mt-0.5 text-amber-300">
        <InfoIcon />
      </span>

      <div>
        <h2 className="text-sm font-semibold text-amber-100">
          Only {FREE_TIER_LIMIT} videos are available right now
        </h2>

        <p className="mt-1 text-sm leading-6 text-amber-100/75">
          This app runs on free-tier services, which limit how many videos can
          go through the transcript and search pipeline. To keep answers
          reliable, you can ask questions about the videos below. They are
          already processed, so replies start right away.
        </p>
      </div>
    </div>
  )
}

export default FreeTierNotice
