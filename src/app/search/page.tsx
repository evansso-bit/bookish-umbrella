import SearchForm from './_components/form'
import type { SearchParams } from 'nuqs/server'
import { Suspense } from 'react'
import { searchParamsCache } from '@/config/searchParams'
import { fetchTMDBData } from '@/lib/tmdb'
import MovieList from '@/components/MovieList'

type PageProps = {
    searchParams: Promise<SearchParams> // Next.js 15+: async searchParams prop
}

export default async function Search({ searchParams }: PageProps) {

    const { q: query } = searchParamsCache.parse(await searchParams)

    return (
        <div>
            <h1>Search</h1>
            <Suspense>
                <SearchForm />
            </Suspense>

            <h1>Search Results for {query}</h1>

            <Suspense fallback={<div>Loading...</div>}>
                <Results />
            </Suspense>
        </div>
    )
}

async function Results() {
    const query = searchParamsCache.get('q')
    const data = await fetchTMDBData(`/search/movie?query=${query}`)

    return (<div>
        <MovieList title={`Search results for "${query}"`} movies={data.results} />
    </div>)
}