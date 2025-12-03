import PageHead from '@/components/page-head'
import MainLayout from '@/layouts/main-layout'
import { PostIndexProps } from '@/types'
import { Badge } from '@/components/ui/badge'
import { Link, router } from '@inertiajs/react'
import { Separator } from '@/components/ui/separator'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useRoute } from 'ziggy-js'
import { formatDate, getActiveTags, getReadingTime } from '@/lib/utils'

export default function Index({ posts, filters }: PostIndexProps) {
    const route = useRoute();

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

    return (
        <>
            <PageHead
                title="Patricio Salazar - Blog"
                font="inter"
            />
            <MainLayout>
                <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
                    <div className="mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-3 break-words">
                            Blog
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Thoughts on freelancing, web development, tech, and life
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row mb-12 items-start justify-between">
                        <ToggleGroup
                            className="flex-wrap"
                            type="multiple"
                            spacing={1.5}
                            size="sm"
                        >
                            {tagOptions.map((tag) => (
                                <ToggleGroupItem
                                    value={tag.value}
                                    variant="outline"
                                    className="data-[state=on]:text-blue-500 data-[state=on]:bg-secondary text-xs"
                                    onClick={() => handleTagChange(tag.value)}
                                    key={tag.value}
                                    aria-label={`Toggle ${tag.label}`}
                                >
                                    {tag.label}
                                </ToggleGroupItem>
                            ))}
                        </ToggleGroup>

                        <Select
                            value={filters.sort}
                            onValueChange={handleSortChange}
                        >
                            <SelectTrigger className="w-full sm:w-[180px] text-xs h-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem
                                    value="desc"
                                    className="text-xs"
                                >
                                    Newest First
                                </SelectItem>
                                <SelectItem
                                    value="asc"
                                    className="text-xs"
                                >
                                    Oldest First
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-12">
                        {posts.data.map((post, index) => {
                            const activeTags = getActiveTags(post);
                            const readingTime = getReadingTime(post.content);
                            const publishDate = post.published_at || post.created_at;

                            return (
                                <article
                                    className="min-w-0"
                                    key={post.id}
                                >
                                    <Link href={route('posts.show', { post: post.slug })} className="group block">
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
                                    {index < posts.data.length - 1 && (
                                        <Separator className="mt-12" />
                                    )}
                                </article>
                            );
                        })}
                    </div>

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
