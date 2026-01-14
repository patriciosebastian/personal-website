import { Head } from '@inertiajs/react'

export interface PageHeadProps {
    title: string;
    description: string;
    noRobots?: boolean;
}

export default function PageHead({ title, description, noRobots = false }: PageHeadProps) {
    return (
        <Head title={title}>
            <meta
                name="description"
                content={description}
            />
            {noRobots &&
                <meta name="robots" content="noindex, nofollow" />
            }
        </Head>
    );
};
