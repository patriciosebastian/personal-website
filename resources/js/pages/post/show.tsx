import { PostShowProps } from '@/types'
import { Head } from '@inertiajs/react'

export default function Show({ post }: PostShowProps) {
  return (
    <div>
        <Head title={`Show ${post.title}`} />
        <h1>Show Post</h1>
        <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  )
}
