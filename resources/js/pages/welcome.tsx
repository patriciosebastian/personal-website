import About from '@/components/about'
import Hero from '@/components/hero'
import LatestPost from '@/components/latestPost'
import PageHead from '@/components/page-head'
import Projects from '@/components/projects'
import MainLayout from '@/layouts/main-layout'
import { usePage } from '@inertiajs/react'
import { Post } from '@/types'

export default function Welcome() {
    const { latestPost } = usePage<{ latestPost: Post }>().props;
    return (
        <>
            <PageHead
                title="Patricio Salazar - Home"
                font="inter"
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
