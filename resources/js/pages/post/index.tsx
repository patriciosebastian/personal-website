import PageHead from '@/components/page-head'
import MainLayout from '@/layouts/main-layout'
import { PostIndexProps } from '@/types'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { handleSortChange, handleTagChange } from '@/lib/utils'
import InertiaPagination from '@/components/ui/inertia-pagination'
import PostCard from '@/components/ui/post-card'
import { Activity } from 'react'
import { usePage } from '@inertiajs/react'

export default function Index({ posts, availableTags, filters }: PostIndexProps) {
    const selectedTags = filters.tag ? filters.tag.split(',').filter(Boolean) : [];
    const { seo } = usePage<{seo: { title: string, description: string }}>().props;

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

    const availableTagOptions = tagOptions.filter(
        (tag) => tag.value === 'all' || availableTags.includes(tag.value)
    );

    return (
        <>
            <PageHead
                title={seo.title}
                description={seo.description}
            />

            <MainLayout>
                <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
                    <div className="mb-14">
                        <p className="text-[12px] font-medium tracking-[0.22em] uppercase text-press-accent mb-5">
                            §&nbsp;Field Notes
                        </p>
                        <h1
                            className="font-display font-medium tracking-[-0.025em] leading-none text-foreground mb-4"
                            style={{ fontSize: 'clamp(3rem, 9vw, 5.25rem)' }}
                        >
                            The Blog
                        </h1>
                        <p className="text-base text-muted-foreground leading-[1.65] mb-6">
                            Web development, tech, side projects, and thoughts on other things.
                        </p>
                        <div className="h-0.5 bg-foreground" />
                    </div>

                    <div className="flex flex-col sm:flex-row mb-14 items-start justify-between gap-4 pb-6 border-b border-border">
                        <ToggleGroup
                            className="flex-wrap"
                            type="multiple"
                            spacing={1.5}
                            size="sm"
                            value={selectedTags}
                        >
                            {availableTagOptions.map((tag) => (
                                <ToggleGroupItem
                                    value={tag.value}
                                    variant="outline"
                                    className="rounded text-[12px] text-muted-foreground border-border data-[state=on]:bg-press-accent data-[state=on]:text-background data-[state=on]:border-press-accent"
                                    onClick={() => handleTagChange('/blog', selectedTags, tag.value, filters.sort)}
                                    key={tag.value}
                                    aria-label={`Toggle ${tag.label}`}
                                >
                                    {tag.label}
                                </ToggleGroupItem>
                            ))}
                        </ToggleGroup>

                        <Select
                            value={filters.sort}
                            onValueChange={(value) => handleSortChange(selectedTags, value)}
                        >
                            <SelectTrigger className="w-full sm:w-45 text-[12px] h-fit rounded border-border">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem
                                    value="desc"
                                    className="text-[12px]"
                                >
                                    Newest First
                                </SelectItem>
                                <SelectItem
                                    value="asc"
                                    className="text-[12px]"
                                >
                                    Oldest First
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-0">
                        <PostCard posts={posts} />
                    </div>

                    <Activity mode={Object.keys(posts).length > 9 ? 'visible' : 'hidden'}>
                        <InertiaPagination
                            current_page={posts.current_page}
                            last_page={posts.last_page}
                            first_page_url={posts.first_page_url!}
                            last_page_url={posts.last_page_url!}
                            prev_page_url={posts.prev_page_url!}
                            next_page_url={posts.next_page_url!}
                            links={posts.links}
                            className="w-fit mt-14 mr-0"
                        />
                    </Activity>
                </div>
            </MainLayout>
        </>
    )
}
