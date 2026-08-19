const API_BASE_URL = import.meta.env.VITE_API_URL;

export const askQuestion = async (youtubeUrl, question) => {

  const response = await fetch("https://youtube-assistant-backend.onrender.com/chat", {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      youtube_url: youtubeUrl,
      question: question,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      data.detail || 'Something went wrong while processing the request.'
    )
  }

  return data
}