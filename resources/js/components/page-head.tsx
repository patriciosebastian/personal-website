import { Head } from '@inertiajs/react'

export interface PageHeadProps {
    title: string;
    font: string;
}

export default function PageHead({ title, font }: PageHeadProps) {
    return (
       <Head title={title}>
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <link
                href={`https://fonts.bunny.net/css?family=${font}:300,400,500,600,800`}
                rel="stylesheet"
            />
        </Head>
    );
};
