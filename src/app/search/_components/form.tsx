'use client'

import { useQueryState } from 'nuqs'
import Results from './results'

export default function SearchForm() {
    const [query, setQuery] = useQueryState('query')

    return (
        <div>
            <input type="search" value={query || ''} onChange={(e) => setQuery(e.target.value)} />

            <Results query={query || ''} />
        </div>
    )
}