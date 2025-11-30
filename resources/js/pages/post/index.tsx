import PageHead from '@/components/page-head'
import MainLayout from '@/layouts/main-layout'
import { PostIndexProps, Post } from '@/types'
import { Badge } from '@/components/ui/badge'
import { Link, router } from '@inertiajs/react'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

export default function Index({ posts, filters }: PostIndexProps) {
    const postTags = [
        'is_freelance',
        'is_web_development',
        'is_tech',
        'is_life',
        'is_entrepreneurship',
        'is_side_project',
        'is_product_review',
        'is_thoughts',
    ];

    const getActiveTags = (post: Post): string[] => {
        return postTags
            .filter((tag) => post[tag as keyof Post])
            .map((tag) => tag.replace('is_', '').replaceAll('_', ' '));
    };

    const formatDate = (date: string): string => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const getReadingTime = (content: string): number => {
        const wordsPerMinute = 200;
        const wordCount = content.split(/\s+/).length;
        return Math.ceil(wordCount / wordsPerMinute);
    };

    const handleTagChange = (tag: string): void => {
        router.get('/blog', { tag: tag === 'all' ? undefined : tag, sort: filters.sort }, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const handleSortChange = (sort: string): void => {
        router.get('/blog', { tag: filters.tag, sort }, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const handlePageChange = (url: string): void => {
        router.get(url, {}, {
            preserveState: true,
            preserveScroll: false,
        });
    };

    const tagOptions = [
        { value: 'all', label: 'All Posts' },
        { value: 'freelance', label: 'Freelance' },
        { value: 'web_development', label: 'Web Development' },
        { value: 'tech', label: 'Tech' },
        { value: 'life', label: 'Life' },
        { value: 'entrepreneurship', label: 'Entrepreneurship' },
        { value: 'side_project', label: 'Side Project' },
        { value: 'product_review', label: 'Product Review' },
        { value: 'thoughts', label: 'Thoughts' },
    ];

    const [featuredPost, ...remainingPosts] = posts.data;

    return (
        <>
            <PageHead
                title="Patricio Salazar - Blog"
                font="inter"
            />
            <MainLayout>
                <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
                    {/* Header */}
                    <div className="mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-3 break-words">
                            Blog
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Thoughts on freelancing, web development, tech, and life
                        </p>
                    </div>

                    {/* Filters and Sort */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-12 items-start sm:items-center justify-between">
                        <Tabs
                            value={filters.tag || 'all'}
                            onValueChange={handleTagChange}
                            className="w-full sm:w-auto overflow-x-auto"
                        >
                            <TabsList className="w-full sm:w-auto">
                                {tagOptions.map((tag) => (
                                    <TabsTrigger key={tag.value} value={tag.value} className="text-xs sm:text-sm">
                                        {tag.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>

                        <Select value={filters.sort} onValueChange={handleSortChange}>
                            <SelectTrigger className="w-full sm:w-[180px]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="desc">Newest First</SelectItem>
                                <SelectItem value="asc">Oldest First</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {posts.data.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-muted-foreground text-lg">No posts published yet. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="space-y-16">
                            {/* Featured Post */}
                            {featuredPost && (
                                <article className="group min-w-0">
                                    <Link href={`/posts/${featuredPost.slug}`}>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-3 text-sm text-muted-foreground flex-wrap">
                                                <time dateTime={featuredPost.published_at || featuredPost.created_at}>
                                                    {formatDate(featuredPost.published_at || featuredPost.created_at)}
                                                </time>
                                                <span>•</span>
                                                <span>{getReadingTime(featuredPost.content)} min read</span>
                                            </div>

                                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight group-hover:text-muted-foreground transition-colors break-words">
                                                {featuredPost.title}
                                            </h2>

                                            {featuredPost.subtitle && (
                                                <p className="text-xl text-muted-foreground leading-relaxed">
                                                    {featuredPost.subtitle}
                                                </p>
                                            )}

                                            {featuredPost.preview_text && (
                                                <p className="text-base text-muted-foreground leading-relaxed line-clamp-3">
                                                    {featuredPost.preview_text}
                                                </p>
                                            )}

                                            {getActiveTags(featuredPost).length > 0 && (
                                                <div className="flex flex-wrap gap-2 pt-2">
                                                    {getActiveTags(featuredPost).map((tag) => (
                                                        <Badge
                                                            key={tag}
                                                            variant="outline"
                                                            className="text-xs capitalize font-normal"
                                                        >
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                </article>
                            )}

                            {remainingPosts.length > 0 && (
                                <>
                                    <Separator className="my-16" />

                                    {/* Remaining Posts */}
                                    <div className="space-y-12">
                                        {remainingPosts.map((post, index) => {
                                            const activeTags = getActiveTags(post);
                                            const readingTime = getReadingTime(post.content);
                                            const publishDate = post.published_at || post.created_at;

                                            return (
                                                <article key={post.id} className="min-w-0">
                                                    <Link href={`/posts/${post.slug}`} className="group block">
                                                        <div className="space-y-3">
                                                            <div className="flex items-center gap-3 text-sm text-muted-foreground flex-wrap">
                                                                <time dateTime={publishDate}>
                                                                    {formatDate(publishDate)}
                                                                </time>
                                                                <span>•</span>
                                                                <span>{readingTime} min read</span>
                                                            </div>

                                                            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight group-hover:text-muted-foreground transition-colors break-words">
                                                                {post.title}
                                                            </h3>

                                                            {post.subtitle && (
                                                                <p className="text-base text-muted-foreground leading-relaxed">
                                                                    {post.subtitle}
                                                                </p>
                                                            )}

                                                            {post.preview_text && (
                                                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                                                    {post.preview_text}
                                                                </p>
                                                            )}

                                                            {activeTags.length > 0 && (
                                                                <div className="flex flex-wrap gap-2 pt-1">
                                                                    {activeTags.map((tag) => (
                                                                        <Badge
                                                                            key={tag}
                                                                            variant="outline"
                                                                            className="text-xs capitalize font-normal"
                                                                        >
                                                                            {tag}
                                                                        </Badge>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </Link>

                                                    {index < remainingPosts.length - 1 && (
                                                        <Separator className="mt-12" />
                                                    )}
                                                </article>
                                            );
                                        })}
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    {/* Pagination */}
                    {posts.last_page > 1 && (
                        <div className="mt-16 flex items-center justify-center gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => posts.prev_page_url && handlePageChange(posts.prev_page_url)}
                                disabled={!posts.prev_page_url}
                            >
                                <ChevronLeftIcon className="size-4" />
                                Previous
                            </Button>

                            <div className="flex items-center gap-2">
                                {posts.links.slice(1, -1).map((link, index) => {
                                    // Show only a few page numbers around current page
                                    const pageNum = index + 1;
                                    const currentPage = posts.current_page;
                                    const shouldShow =
                                        pageNum === 1 ||
                                        pageNum === posts.last_page ||
                                        (pageNum >= currentPage - 1 && pageNum <= currentPage + 1);

                                    if (!shouldShow && pageNum === currentPage - 2) {
                                        return <span key={index} className="px-2">...</span>;
                                    }

                                    if (!shouldShow && pageNum === currentPage + 2) {
                                        return <span key={index} className="px-2">...</span>;
                                    }

                                    if (!shouldShow) {
                                        return null;
                                    }

                                    return (
                                        <Button
                                            key={index}
                                            variant={link.active ? "default" : "outline"}
                                            size="sm"
                                            onClick={() => link.url && handlePageChange(link.url)}
                                            className="min-w-[2.5rem]"
                                        >
                                            {pageNum}
                                        </Button>
                                    );
                                })}
                            </div>

                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => posts.next_page_url && handlePageChange(posts.next_page_url)}
                                disabled={!posts.next_page_url}
                            >
                                Next
                                <ChevronRightIcon className="size-4" />
                            </Button>
                        </div>
                    )}
                </div>
            </MainLayout>
        </>
    )
}
