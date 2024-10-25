// app/actions.ts
'use server'

import { revalidateTag } from 'next/cache'

export async function revalidateTMDBData(endpoint: string) {
  revalidateTag(`tmdb-${endpoint}`)
}