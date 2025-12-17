import PageHead from '@/components/page-head'
import MainLayout from '@/layouts/main-layout'
import { PostIndexProps } from '@/types'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { handleSortChange, handleTagChange } from '@/lib/utils'
import InertiaPagination from '@/components/ui/inertia-pagination'
import PostCard from '@/components/ui/post-card'
import { Activity } from 'react'

export default function Index({ posts, availableTags, filters }: PostIndexProps) {
    const selectedTags = filters.tag ? filters.tag.split(',').filter(Boolean) : [];

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
                            Web development, tech, side projects, and thoughts on other things.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row mb-12 items-start justify-between">
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
                                    className="data-[state=on]:text-blue-500 data-[state=on]:bg-secondary text-xs"
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
                            className="w-fit mt-12 mr-0"
                        />
                    </Activity>
                </div>
            </MainLayout>
        </>
    )
}
