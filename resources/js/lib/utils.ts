import { postTags } from '@/data/postTags';
import { Post } from '@/types';
import { InertiaLinkProps, router } from '@inertiajs/react';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { createBrowserClient } from '@supabase/ssr';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function isSameUrl(
    url1: NonNullable<InertiaLinkProps['href']>,
    url2: NonNullable<InertiaLinkProps['href']>,
) {
    return resolveUrl(url1) === resolveUrl(url2);
}

export function resolveUrl(url: NonNullable<InertiaLinkProps['href']>): string {
    return typeof url === 'string' ? url : url.url;
}

export const getActiveTags = (post: Post): string[] => {
    return postTags
        .filter((tag) => post[tag as keyof Post])
        .map((tag) => tag.replace('is_', '').replaceAll('_', ' '));
};

export const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export const getReadingTime = (content: string): number => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
};

export const handleTagChange = (routePath: string, selectedTags: string[], tag: string, sort: string): void => {
    const currentSelectedTags = selectedTags;
    let updatedSelectedTags: string[];

    if (tag === 'all') {
        updatedSelectedTags = [];
    } else if (currentSelectedTags.includes(tag)) {
        updatedSelectedTags = currentSelectedTags.filter(t => t !== tag);
    } else {
        updatedSelectedTags = [...currentSelectedTags, tag];
    }

    router.get(routePath, { tag: updatedSelectedTags.join(','), sort: sort }, {
        only: ['posts', 'filters'],
        preserveState: true,
        preserveScroll: true,
    });
};

export const handleSortChange = (tags: string[], sort: string): void => {
    router.get('/blog', { tag: tags.join(','), sort }, {
        only: ['posts', 'filters'],
        preserveState: true,
        preserveScroll: true,
    });
};

export const handlePageChange = (url: string): void => {
    router.get(url, {}, {
        preserveState: true,
        preserveScroll: false,
    });
};

export function createClient() {
    return createBrowserClient(
        import.meta.env.VITE_PUBLIC_SUPABASE_URL,
        import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY
    );
}
