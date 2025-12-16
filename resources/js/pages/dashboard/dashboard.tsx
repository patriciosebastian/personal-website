import AppLayout from '@/layouts/app-layout'
import { index as dashboard } from '@/actions/App/Http/Controllers/DashboardController'
import { PaginatedData, Post, Reaction, type BreadcrumbItem } from '@/types'
import { Head } from '@inertiajs/react'
import PublishedPosts from '@/components/dashboard/published-posts'
import Drafts from '@/components/dashboard/drafts'
import Reactions from '@/components/dashboard/reactions'
import ViewSelectedPost from '@/components/dashboard/view-selected-post'
import { useRef } from 'react'
import { usePreserveScrollPosition } from '@/hooks/use-preserve-scroll-position'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

interface DashboardProps {
    publishedPosts: PaginatedData<Post>;
    draftPosts: Post[];
    reactions: Reaction[];
    postToPreview: Post;
}

export default function Dashboard({ publishedPosts, draftPosts, reactions, postToPreview }: DashboardProps) {
    const publishedPostsRef = useRef<HTMLDivElement>(null);
    usePreserveScrollPosition({ ref: publishedPostsRef as React.RefObject<HTMLDivElement> });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div ref={publishedPostsRef} className="relative aspect-video overflow-x-hidden scrollbar-thin rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PublishedPosts publishedPosts={publishedPosts} />
                    </div>
                    <div className="relative aspect-video overflow-hidden scrollbar-thin rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <Drafts draftPosts={draftPosts} />
                    </div>
                    <div className="relative aspect-video overflow-x-hidden scrollbar-thin rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <Reactions reactions={reactions} />
                    </div>
                </div>
                <div className="relative flex-1 overflow-hidden scrollbar-thin rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <ViewSelectedPost postToPreview={postToPreview || publishedPosts.data[0]} />
                </div>
            </div>
        </AppLayout>
    );
}
