// lib/tmdb.ts
import { unstable_cacheLife as cacheLife, unstable_cacheTag as cacheTag } from 'next/cache'

export async function fetchTMDBData(endpoint: string) {
  'use cache'
  cacheLife('tmdbDaily')
  cacheTag(`tmdb-${endpoint}`)

  const response = await fetch(`https://api.themoviedb.org/3${endpoint}`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTY3NDQ0N2MxOTI1M2FlZWVkYmEzNDVhZDVmNmYyMSIsIm5iZiI6MTcyOTg4MjQwNC4yNDY3MzMsInN1YiI6IjY1ODU1MDNkMDFiMWNhNWY1NzkwMjI1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wQ_pcfCNTTb1ALpjlLOWw3DSpUS9k37mRhXWzh0DGo8`,
    },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch TMDB data: ${response.statusText}`)
  }

  return response.json()
}