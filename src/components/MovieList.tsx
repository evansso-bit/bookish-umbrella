// components/MovieList.tsx
import Image from 'next/image'

interface Movie {
  id: number
  title: string
  poster_path: string
}

interface MovieListProps {
  title: string
  movies: Movie[]
}

export default function MovieList({ title, movies }: MovieListProps) {
  return (
    <section>
      <h2>{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="flex flex-col items-center">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={200}
              height={300}
              className="rounded-lg shadow-md"
            />
            <p className="mt-2 text-center">{movie.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}