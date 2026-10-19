/*
 * The only videos that are indexed in the RAG pipeline on the free tier.
 * Add or remove entries here and the whole UI updates.
 *
 * Details come from each video's public YouTube page (title, channel, date,
 * description). Thumbnails are loaded straight from YouTube's image CDN.
 */

export const FREE_TIER_LIMIT = 7

export const VIDEOS = [
  {
    id: '8xUher8-5_Q',
    title: "How I'd Learn ML/AI FAST If I Had to Start Over",
    channel: 'Tech With Tim',
    published: 'Apr 28, 2025',
    category: 'Machine Learning',
    summary:
      'A step-by-step roadmap for learning AI and ML from scratch in 2025, based on what the creator would do if he started over today.',
    highlights: [
      'Seven steps, from Step 0 to Step 6',
      'Written for complete beginners',
      'Python-focused learning path',
    ],
    questions: [
      'Summarize the learning roadmap in this video',
      'What is Step 0 and why does it come first?',
      'Which skills does he say to learn before machine learning?',
    ],
  },
  {
    id: 'ZftI2fEz0Fw',
    title: 'What is Machine Learning? | 100 Days of Machine Learning',
    channel: 'CampusX',
    published: 'Mar 13, 2021',
    category: 'Machine Learning',
    summary:
      'The opening lesson of the 100 Days of Machine Learning series. It explains what machine learning is and how it has evolved over the years.',
    highlights: [
      'Part of the 100 Days of ML series',
      'Covers the definition and history of ML',
      'Beginner friendly',
    ],
    questions: [
      'What is machine learning according to this video?',
      'How has machine learning evolved over the years?',
      'Give me a short summary of this lesson',
    ],
  },
  {
    id: 'SEWS9P4ODmc',
    title: 'Text Splitters in LangChain | Generative AI using LangChain | Video 11',
    channel: 'CampusX',
    published: 'Apr 3, 2025',
    category: 'Generative AI',
    summary:
      'A walkthrough of the text splitters in LangChain, which is the same chunking step this assistant uses before storing transcripts in Pinecone.',
    highlights: [
      'Length-based text splitting',
      'Text-structure and document-structure splitting',
      'Semantic-meaning based splitting',
    ],
    questions: [
      'Why do we need text splitters in LangChain?',
      'Explain length-based text splitting',
      'What is semantic meaning based splitting?',
    ],
  },
  {
    id: '9syVtJb7GTc',
    title: "I'm Not Like Them | Iron Heart Vol 1",
    channel: 'Sukoonaaz',
    published: 'Jun 20, 2026',
    category: 'Music',
    summary:
      'A song upload tagged as the first volume of the Iron Heart series, meant to be heard with headphones.',
    highlights: [
      'Song, first volume of Iron Heart',
      'Uploaded by Sukoonaaz',
      'Answers depend on the available captions',
    ],
    questions: [
      'What is this song about?',
      'Summarize the lyrics',
      'What mood does the song have?',
    ],
  },
  {
    id: 'T89BLjI5Row',
    title: "Iron Heart 2 (I'm not like them) | M-alasle",
    channel: 'محمود الأصلي',
    published: 'May 13, 2026',
    category: 'Music',
    summary:
      'Part 2 of the Iron Heart song, described by the uploader as touching and emotional.',
    highlights: [
      'Song, second part of Iron Heart',
      'Uploaded by محمود الأصلي (M-alasle)',
      'Answers depend on the available captions',
    ],
    questions: [
      'What is this song about?',
      'Summarize the lyrics',
      'What feelings does the song express?',
    ],
  },
  {
    id: 'LqGGweN7EEk',
    title: 'Bella - Door | Prod. By Abhi Kesla',
    channel: 'BellaOfficials',
    published: 'Jul 6, 2026',
    category: 'Music',
    summary:
      'A song by Bella, produced by Abhi Kesla. The lyrics are about loneliness, pressure, and the hope of being understood through music.',
    highlights: [
      'Music by Bella',
      'Produced by Abhi Kesla',
      'Answers depend on the available captions',
    ],
    questions: [
      'What is the main message of this song?',
      'Summarize the lyrics',
      'Who produced this track?',
    ],
  },
  {
    id: 'A2aUlIjxtEo',
    title: 'Bella - Mein Haar Gya | Prod. By Abhi Kesla | Music Video',
    channel: 'BellaOfficials',
    published: 'Aug 8, 2026',
    category: 'Music',
    summary:
      'A music video by Bella with vocals, composition, and lyrics by Bella, produced and mixed by Abhi Kesla, and directed by Vikram Udawat.',
    highlights: [
      'Vocals, composer, and lyricist: Bella',
      'Produced and mixed by Abhi Kesla',
      'Shot and directed by Vikram Udawat',
    ],
    questions: [
      'What is this song about?',
      'Who worked on this music video?',
      'Summarize the lyrics',
    ],
  },
]

export const getVideoUrl = (video) =>
  `https://www.youtube.com/watch?v=${video.id}`

export const getThumbnail = (video, quality = 'hqdefault') =>
  `https://i.ytimg.com/vi/${video.id}/${quality}.jpg`

export const CATEGORIES = ['All', ...new Set(VIDEOS.map((v) => v.category))]
