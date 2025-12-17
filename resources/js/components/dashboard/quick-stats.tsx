import { Item, ItemContent, ItemDescription, ItemTitle } from "../ui/item"
import { Badge } from "../ui/badge"
import { Separator } from "../ui/separator"

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

interface QuickStatsProps {
    stats: PostStats;
}

export default function QuickStats({ stats }: QuickStatsProps) {
    const categoryLabels: Record<keyof PostStats['categoryBreakdown'], string> = {
        freelance: 'Freelance',
        webDevelopment: 'Web Development',
        tech: 'Tech',
        life: 'Life',
        entrepreneurship: 'Entrepreneurship',
        sideProject: 'Side Project',
        productReview: 'Product Review',
        thoughts: 'Thoughts',
    };

    return (
        <div>
            <div className="text-lg pl-6 my-4 font-semibold">Quick Stats</div>

            <div className="space-y-4 px-6 mb-6">
                <Item variant="muted" className="bg-muted/10 dark:bg-muted/20">
                    <ItemContent className=" w-full flex flex-row justify-between items-center">
                        <ItemTitle>Total Published</ItemTitle>
                        <Badge variant="secondary">{stats.totalPublished}</Badge>
                    </ItemContent>
                </Item>

                <Item variant="muted" className="bg-muted/10 dark:bg-muted/20">
                    <ItemContent className=" w-full flex flex-row justify-between items-center">
                        <ItemTitle>Total Drafts</ItemTitle>
                        <Badge variant="secondary">{stats.totalDrafts}</Badge>
                    </ItemContent>
                </Item>

                <Item variant="muted" className="bg-muted/10 dark:bg-muted/20">
                    <ItemContent className=" w-full flex flex-row justify-between items-center">
                        <ItemTitle>Total Archived</ItemTitle>
                        <Badge variant="secondary">{stats.totalArchived}</Badge>
                    </ItemContent>
                </Item>

                <Separator className="my-4" />

                <div>
                    <ItemDescription className="mb-3 font-medium">Posts by Category</ItemDescription>
                    <div className="space-y-2">
                        {Object.entries(stats.categoryBreakdown).map(([key, count]) => (
                            count > 0 && (
                                <div key={key} className="flex justify-between items-center">
                                    <span className="text-muted-foreground">
                                        {categoryLabels[key as keyof PostStats['categoryBreakdown']]}
                                    </span>
                                    <Badge variant="outline">{count}</Badge>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
