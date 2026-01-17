import AppLayout from '@/layouts/app-layout'
import { index as dashboard } from '@/actions/App/Http/Controllers/DashboardController'
import { PaginatedData, Post, PostStats, type BreadcrumbItem } from '@/types'
import PublishedPosts from '@/components/dashboard/published-posts'
import Drafts from '@/components/dashboard/drafts'
import QuickStats from '@/components/dashboard/quick-stats'
import ViewSelectedPost from '@/components/dashboard/view-selected-post'
import { useRef } from 'react'
import { usePreserveScrollPosition } from '@/hooks/use-preserve-scroll-position'
import PageHead from '@/components/page-head'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

interface DashboardProps {
    publishedPosts: PaginatedData<Post>;
    draftPosts: PaginatedData<Post>;
    stats: PostStats;
    postToPreview: Post;
}

export default function Dashboard({ publishedPosts, draftPosts, stats, postToPreview }: DashboardProps) {
    const publishedPostsRef = useRef<HTMLDivElement>(null);
    usePreserveScrollPosition({ ref: publishedPostsRef as React.RefObject<HTMLDivElement> });

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <PageHead
                title='Dashboard'
                description='Admin Dashboard'
                noRobots={true}
            />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div ref={publishedPostsRef} className="relative aspect-video overflow-x-hidden scrollbar-thin rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PublishedPosts publishedPosts={publishedPosts} />
                    </div>
                    <div className="relative aspect-video overflow-hidden scrollbar-thin rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <Drafts draftPosts={draftPosts} />
                    </div>
                    <div className="relative aspect-video overflow-x-hidden scrollbar-thin rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <QuickStats stats={stats} />
                    </div>
                </div>
                <div className="relative flex-1 overflow-hidden scrollbar-thin rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <ViewSelectedPost postToPreview={postToPreview || publishedPosts.data[0]} />
                </div>
            </div>
        </AppLayout>
    );
}
