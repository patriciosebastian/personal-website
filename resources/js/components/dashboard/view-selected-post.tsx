import { Post } from "@/types"

export default function ViewSelectedPost({ postToPreview }: { postToPreview: Post[] }) {
    return (
        <div className="p-12">
            <h3 className="text-xl font-semibold">{postToPreview.title}</h3>
            <div
                dangerouslySetInnerHTML={{ __html: postToPreview.content }}
                className="prose"
            />
        </div>
    );
};
