'use client'

import { useQueryState } from 'nuqs'

export default function SearchForm() {
    const [query, setQuery] = useQueryState('q')

    return (
        <div>
            <input
                type="search"
                value={query || ''}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter movie title"
            />
        </div>
    )
}