import { searchParamsCache } from '@/config/searchParams'
import { fetchTMDBData } from '@/lib/tmdb'
import MovieList from '@/components/MovieList'



export default async function Results() {

    const query = searchParamsCache.get('q')
    const data = await fetchTMDBData(`/search/movie?query=${query}`)

    return (<div>
        <MovieList title={`Search results for "${query}"`} movies={data.results} />
    </div>)
}