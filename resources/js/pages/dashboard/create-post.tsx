import AppLayout from '@/layouts/app-layout'
import { index as dashboard, show } from '@/actions/App/Http/Controllers/DashboardController'
import { Head } from '@inertiajs/react'
import { useRef, useState } from 'react'
import { usePreserveScrollPosition } from '@/hooks/use-preserve-scroll-position'
import { BreadcrumbItem, Post } from '@/types'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import { ChevronsUpDown } from 'lucide-react'
import TinyMCE from '@/components/tiny-mce'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Create Post',
        href: show().url,
    },
];

export default function CreatePost({ post }: { post: Post }) {
    const publishedPostsRef = useRef<HTMLDivElement>(null);
    usePreserveScrollPosition({ ref: publishedPostsRef as React.RefObject<HTMLDivElement> });
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState(post.title || '');
    const [subtitle, setSubtitle] = useState(post.subtitle || '');
    const [preview, setPreview] = useState(post.preview_text || '');
    const [isFreelance, setIsFreelance] = useState(post.is_freelance || false);
    const [isWebDevelopment, setIsWebDevelopment] = useState(post.is_web_development || false);
    const [slug, setSlug] = useState(post.slug || '');
    const [status, setStatus] = useState(post.status || 'draft');
    const [isTech, setIsTech] = useState(post.is_tech || false);
    const [isLife, setIsLife] = useState(post.is_life || false);
    const [isEntrepreneurship, setIsEntrepreneurship] = useState(post.is_entrepreneurship || false);
    const [isSideProject, setIsSideProject] = useState(post.is_side_project || false);
    const [isProductReview, setIsProductReview] = useState(post.is_product_review || false);
    const [isThoughts, setIsThoughts] = useState(post.is_thoughts || false);
    const content = post.content || '';

    const handleClearContent = () => {
        setTitle('');
        setSubtitle('');
        setPreview('');
        setIsFreelance(false);
        setIsWebDevelopment(false);
        setSlug('');
        setIsTech(false);
        setIsLife(false);
        setIsEntrepreneurship(false);
        setIsSideProject(false);
        setIsProductReview(false);
        setIsThoughts(false);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Post" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative lg:flex flex-1 p-6 space-x-2 overflow-hidden scrollbar-thin rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="lg:w-1/2">
                        <label htmlFor="title" className="text-muted-foreground">Title:</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            className="block p-2 rounded w-full bg-background border border-muted-foreground/50"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <Collapsible
                        open={isOpen}
                        onOpenChange={setIsOpen}
                        className="lg:w-1/2 flex flex-col gap-1"
                    >
                        <h4 className="text-base text-muted-foreground">Post Details</h4>
                        <CollapsibleTrigger asChild>
                            <Button variant="outline">
                                <ChevronsUpDown />
                                <span className="sr-only">Toggle</span>
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <div className="grid grid-cols-3 items-center gap-4 text-black dark:text-white p-4 bg-secondary rounded-sm">
                                <input type="text" name="subtitle" id="subtitle" placeholder="sub_title" className="p-2 border border-muted-foreground" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
                                <input type="text" name="preview" id="preview" placeholder="preview" className="p-2 border border-muted-foreground" value={preview} onChange={(e) => setPreview(e.target.value)} />
                                <input type="text" name="slug" id="slug" placeholder="slug" className="p-2 border border-muted-foreground" value={slug} onChange={(e) => setSlug(e.target.value)} required />
                                <div>
                                    <input type="checkbox" name="isFreelance" id="isFreelance" className="mr-2 align-middle" checked={isFreelance} onChange={(e) => setIsFreelance(e.target.checked)} />
                                    <label htmlFor="isFreelance" className="align-middle">is_freelance</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="isWebDevelopment" id="isWebDevelopment" className="mr-2 align-middle" checked={isWebDevelopment} onChange={(e) => setIsWebDevelopment(e.target.checked)} />
                                    <label htmlFor="isWebDevelopment" className="align-middle">is_web_development</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="isTech" id="isTech" className="mr-2 align-middle" checked={isTech} onChange={(e) => setIsTech(e.target.checked)} />
                                    <label htmlFor="isTech" className="align-middle">is_tech</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="isLife" id="isLife" className="mr-2 align-middle" checked={isLife} onChange={(e) => setIsLife(e.target.checked)} />
                                    <label htmlFor="isLife" className="align-middle">is_life</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="isEntrepreneurship" id="isEntrepreneurship" className="mr-2 align-middle cursor-not-allowed" disabled checked={isEntrepreneurship} onChange={(e) => setIsEntrepreneurship(e.target.checked)} />
                                    <label htmlFor="isEntrepreneurship" className="align-middle opacity-50">is_entrepreneurship</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="isSideProject" id="isSideProject" className="mr-2 align-middle" checked={isSideProject} onChange={(e) => setIsSideProject(e.target.checked)} />
                                    <label htmlFor="isSideProject" className="align-middle">is_side_project</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="isProductReview" id="isProductReview" className="mr-2 align-middle" checked={isProductReview} onChange={(e) => setIsProductReview(e.target.checked)} />
                                    <label htmlFor="isProductReview" className="align-middle">is_product_review</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="isThoughts" id="isThoughts" className="mr-2 align-middle" checked={isThoughts} onChange={(e) => setIsThoughts(e.target.checked)} />
                                    <label htmlFor="isThoughts" className="align-middle">is_thoughts</label>
                                </div>
                                <Select onValueChange={(value) => setStatus(value as "draft" | "published" | "archived")} defaultValue="draft">
                                    <SelectTrigger className="bg-primary-foreground">
                                        <SelectValue placeholder="Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="draft">
                                            Draft
                                        </SelectItem>
                                        <SelectItem value="published">
                                            Published
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                </div>
                <TinyMCE
                    title={title}
                    subtitle={subtitle}
                    content={content}
                    preview={preview}
                    slug={slug}
                    status={status}
                    isFreelance={isFreelance}
                    isWebDevelopment={isWebDevelopment}
                    isTech={isTech}
                    isLife={isLife}
                    isEntrepreneurship={isEntrepreneurship}
                    isSideProject={isSideProject}
                    isProductReview={isProductReview}
                    isThoughts={isThoughts}
                    onClearContent={handleClearContent}
                />
            </div>
        </AppLayout>
    );
}
