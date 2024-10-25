// app/movies/page.tsx
import { Suspense } from 'react'
import { fetchTMDBData } from '@/lib/tmdb'
import MovieList from '@/components/MovieList'

export default async function MoviesPage() {
  return (
    <main>
      <h1>Popular Movies</h1>
      <p>Discover the latest blockbusters and fan favorites!</p>
      <Suspense fallback={<div>Loading popular movies...</div>}>
        <PopularMovies />
      </Suspense>
      <Suspense fallback={<div>Loading top rated movies...</div>}>
        <TopRatedMovies />
      </Suspense>
    </main>
  )
}

async function PopularMovies() {
  const data = await fetchTMDBData('/movie/popular')
  return <MovieList title="Popular Movies" movies={data.results} />
}

async function TopRatedMovies() {
  const data = await fetchTMDBData('/movie/top_rated')
  return <MovieList title="Top Rated Movies" movies={data.results} />
}