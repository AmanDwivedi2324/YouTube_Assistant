const API_BASE_URL = 'http://localhost:8000'

export const askQuestion = async (youtubeUrl, question) => {

  const response = await fetch(`${API_BASE_URL}/chat`, {
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