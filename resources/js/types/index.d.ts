import { ReactionEmoji } from '@/enums/ReactionEmoji';
import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Post {
    id: number;
    title: string;
    subtitle: string | null;
    preview_text: string | null;
    content: string;
    slug: string;
    created_at: string;
    published_at: string | null;
    updated_at: string | null;
    status: 'draft' | 'published' | 'archived';
    is_freelance: boolean;
    is_web_development: boolean;
    is_tech: boolean;
    is_life: boolean;
    is_entrepreneurship: boolean;
    is_side_project: boolean;
    is_product_review: boolean;
    is_thoughts: boolean;
    user?: User;
    reactions?: Reaction[];
}

export interface Reaction {
    id: number;
    post_id: number;
    emoji: ReactionEmoji;
    count: number;
    created_at: string;
    post?: Post;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface PaginatedData<T> {
    data: T[];
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

export interface InertiaPaginatedData {
    current_page: number;
    last_page: number;
    first_page_url: string;
    last_page_url: string;
    prev_page_url: string | null;
    next_page_url: string | null;
    links: PaginationLink[];
    className?: string;
}

export interface PostIndexProps {
    posts: PaginatedData<Post>;
    availableTags: string[];
    filters: {
        tag?: string;
        sort: 'asc' | 'desc';
    };
}

export interface PostShowProps {
    post: Post;
}

export interface PostEditProps {
    post: Post;
}

// eslint-disable-next-line
export interface PostCreateProps {
    //
}

export interface PostCardProps {
    posts: PaginatedData<Post>;
}

export interface Project {
    title: string;
    summary: string;
    description: string;
    link: string;
    image?: string;
    imageAltText?: string;
    techStack: string[];
}

export interface SectionHeadingProps {
    headingText: string;
    subtitle?: string;
    number?: number;
}

export interface PostStats {
    totalPublished: number;
    totalDrafts: number;
    totalArchived: number;
    categoryBreakdown: {
        freelance: number;
        webDevelopment: number;
        tech: number;
        life: number;
        entrepreneurship: number;
        sideProject: number;
        productReview: number;
        thoughts: number;
    };
}
