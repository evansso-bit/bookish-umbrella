import { Suspense } from 'react'
import { searchParamsCache } from '@/config/searchParams'
import { fetchTMDBData } from '@/lib/tmdb'
import MovieList from '@/components/MovieList'
import SearchForm from './_components/form'
import type { SearchParams } from 'nuqs/server'

type PageProps = {
    searchParams: Promise<SearchParams> // Next.js 15+: async searchParams prop
}

export default async function Search({ searchParams }: PageProps) {
    return (
        <div>
            <h1>Search</h1>
            <Suspense fallback={<div>Loading search form...</div>}>
                <SearchForm />
            </Suspense>

            <Suspense fallback={<div>Loading results...</div>}>
                <SearchResults searchParams={searchParams} />
            </Suspense>
        </div>
    )
}

async function SearchResults({ searchParams }: { searchParams: Promise<SearchParams> }) {
    const { q: query } = searchParamsCache.parse(await searchParams)

    if (!query) {
        return <div>Enter a search query to see results.</div>
    }

    return (
        <div>
            <h2>Search Results for "{query}"</h2>
            <Suspense fallback={<div>Loading movie results...</div>}>
                <MovieSearchResults query={query} />
            </Suspense>
        </div>
    )
}

async function MovieSearchResults({ query }: { query: string }) {
    'use cache'
    const data = await fetchTMDBData(`/search/movie?query=${encodeURIComponent(query)}`)

    return <MovieList title={`Search results for "${query}"`} movies={data.results} />
}