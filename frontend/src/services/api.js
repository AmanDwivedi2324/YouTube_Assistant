// Falls back to the deployed backend when VITE_API_URL is not set.
const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'https://youtube-assistant-backend.onrender.com'

export const askQuestion = async (youtubeUrl, question) => {

  let response

  try {

    response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        youtube_url: youtubeUrl,
        question: question,
      }),
    })

  } catch {

    throw new Error(
      'Could not reach the server. Check your connection and try again.'
    )

  }

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(
      data.detail || 'Something went wrong while processing the request.'
    )
  }

  return data
}
