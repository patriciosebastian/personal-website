import About from '@/components/about'
import Hero from '@/components/hero'
import LatestPost from '@/components/latestPost'
import PageHead from '@/components/page-head'
import Projects from '@/components/projects'
import MainLayout from '@/layouts/main-layout'
import { usePage } from '@inertiajs/react'
import { Post } from '@/types'

export default function Welcome() {
    const { latestPost, seo } = usePage<{
        latestPost: Post,
        seo: { title: string, description: string }
    }>().props;

    return (
        <>
            <PageHead
                title={seo.title}
                description={seo.description}
            />

            <MainLayout>
                <Hero latestPost={latestPost} />
                <About />
                <Projects />
                <LatestPost />
            </MainLayout>
        </>
    );
}
