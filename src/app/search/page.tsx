import SearchForm from './_components/form'
import Results from './_components/results'
import type { SearchParams } from 'nuqs/server'
import { Suspense } from 'react'

type PageProps = {
    searchParams: Promise<SearchParams> // Next.js 15+: async searchParams prop
}

export default function Search({ searchParams }: PageProps) {

    return (
        <div>
            <SearchForm />
            <Suspense fallback={<div>Loading...</div>}>
                <Results searchParams={searchParams} />
            </Suspense>
        </div>
    )
}