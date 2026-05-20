import {
    Pagination,
    PaginationContent,
    PaginationFirst,
    PaginationItem,
    PaginationLast,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from '@/components/ui/pagination'
import { cn } from '@/lib/utils'
import { InertiaPaginatedData } from '@/types'

const activePageClass = 'bg-foreground text-background border-foreground hover:bg-foreground hover:text-background';
const inactivePageClass = 'text-muted-foreground border-border';

export default function InertiaPagination({
    current_page,
    last_page,
    first_page_url,
    last_page_url,
    prev_page_url,
    next_page_url,
    links,
    className
}: InertiaPaginatedData) {
    return (
        <>
            {last_page > 1 && (
                <Pagination className={cn(className)}>
                    <PaginationContent>
                        {current_page > 2 && (
                            <PaginationItem>
                                <PaginationFirst
                                    href={first_page_url!}
                                    prefetch="hover"
                                    className={inactivePageClass}
                                />
                            </PaginationItem>
                        )}
                        <PaginationItem>
                            <PaginationPrevious
                                href={prev_page_url || '#'}
                                prefetch="hover"
                                className={cn(
                                    inactivePageClass,
                                    current_page === 1
                                        ? 'opacity-50 pointer-events-none'
                                        : ''
                                )}
                            />
                        </PaginationItem>
                        {current_page > 1 && current_page === last_page && (
                            <PaginationItem>
                                <PaginationLink
                                    href={links[current_page - 2].url!}
                                    isActive={false}
                                    prefetch="hover"
                                    className={inactivePageClass}
                                >
                                    {current_page - 2}
                                </PaginationLink>
                            </PaginationItem>
                        )}
                        {current_page > 1 && (
                            <PaginationItem>
                                <PaginationLink
                                    href={links[current_page - 1].url!}
                                    isActive={false}
                                    prefetch="hover"
                                    className={inactivePageClass}
                                >
                                    {current_page - 1}
                                </PaginationLink>
                            </PaginationItem>
                        )}
                        <PaginationItem>
                            <PaginationLink
                                href={links[current_page].url!}
                                isActive={true}
                                className={activePageClass}
                            >
                                {current_page}
                            </PaginationLink>
                        </PaginationItem>
                        {current_page < last_page && (
                            <PaginationItem>
                                <PaginationLink
                                    href={links[current_page + 1].url!}
                                    isActive={false}
                                    prefetch="hover"
                                    className={inactivePageClass}
                                >
                                    {current_page + 1}
                                </PaginationLink>
                            </PaginationItem>
                        )}
                        {current_page < last_page && current_page < 2 && (
                            <PaginationItem>
                                <PaginationLink
                                    href={links[current_page + 2].url!}
                                    isActive={false}
                                    prefetch="hover"
                                    className={inactivePageClass}
                                >
                                    {current_page + 2}
                                </PaginationLink>
                            </PaginationItem>
                        )}
                        <PaginationItem>
                            <PaginationNext
                                href={next_page_url || '#'}
                                prefetch="hover"
                                className={cn(
                                    inactivePageClass,
                                    current_page === last_page
                                        ? 'opacity-50 pointer-events-none'
                                        : ''
                                )}
                            />
                        </PaginationItem>
                        {current_page < last_page - 1 && (
                            <PaginationItem>
                                <PaginationLast
                                    href={last_page_url!}
                                    prefetch="hover"
                                    className={inactivePageClass}
                                />
                            </PaginationItem>
                        )}
                    </PaginationContent>
                </Pagination>
            )}
        </>
    );
}
