import { PostEditProps } from '@/types'
import { Head } from '@inertiajs/react'

export default function Edit({ post }: PostEditProps) {
  return (
    <div>
        <Head title={`Edit ${post.title}`} />
        <h1>Edit Post</h1>
        <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  )
}
