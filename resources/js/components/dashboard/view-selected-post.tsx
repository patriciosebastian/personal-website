import { Post } from "@/types"
import { Link } from "@inertiajs/react"

export default function ViewSelectedPost({ postToPreview }: { postToPreview: Post }) {
    return (
        <article className="w-fit max-w-lg pt-16 mb-12 lg:mx-auto lg:pt-22 lg:max-w-4xl">
            <Link
                href={route('dashboard.posts.show', { post: postToPreview.slug })}
                as="button"
                className="absolute top-4 right-4 cursor-pointer px-4 py-2 rounded-md hover:bg-accent"
            >
                Edit
            </Link>
            <h3 className="text-xl font-semibold lg:text-3xl lg:mb-12">{postToPreview.title}</h3>
            <div
                dangerouslySetInnerHTML={{ __html: postToPreview.content }}
                className="prose lg:prose-lg dark:prose-invert"
            />
            <Link
                href={route('dashboard.posts.destroy', { post: postToPreview.slug })}
                method="delete"
                as="button"
                className="absolute bottom-4 right-4 cursor-pointer px-4 py-2 rounded-md hover:bg-red-600"
                onBefore={() => confirm('Are you sure you want to delete this post?')}
            >
                Delete
            </Link>
        </article>
    );
};
