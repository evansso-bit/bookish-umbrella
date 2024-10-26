import { searchParamsCache } from '@/config/searchParams'
import { fetchTMDBData } from '@/lib/tmdb'
import MovieList from '@/components/MovieList'
import type { SearchParams } from 'nuqs/server'


export default async function Results({ searchParams }: { searchParams: Promise<SearchParams> }) {
    const { q: query } = searchParamsCache.parse(await searchParams)
    const data = await fetchTMDBData(`/search/movie?query=${query}`)

    return (<div>
        <MovieList title={`Search results for "${query}"`} movies={data.results} />
    </div>)
}