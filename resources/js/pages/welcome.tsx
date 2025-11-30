import About from '@/components/about'
import Hero from '@/components/hero'
import LatestPost from '@/components/latestPost'
import PageHead from '@/components/page-head'
import Projects from '@/components/projects'
import Fallback from '@/components/ui/fallback'
import MainLayout from '@/layouts/main-layout'
import { Deferred } from '@inertiajs/react'

export default function Welcome() {
    return (
        <>
            <PageHead
                title="Patricio Salazar - Home"
                font="inter"
            />

            <MainLayout>
                <Hero />
                <About />
                <Projects />
                <Deferred
                    data="latestPost"
                    fallback={<Fallback />}
                >
                    <LatestPost />
                </Deferred>
            </MainLayout>
        </>
    );
}
