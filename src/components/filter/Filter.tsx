'use client'
import { createUrl } from '@/lib';
import { SortFilterItemFilter } from '@/lib/constants';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react'

export function FilterItemList({ list }: { list: SortFilterItemFilter[] }) {


    const skeleton = 'mb-3 h-4 w-5/6 animate-pulse rounded';
    const activeAndTitles = 'bg-neutral-800 dark:bg-neutral-300';
    const items = 'bg-neutral-400 dark:bg-neutral-700';

    return (
        <Suspense
            fallback={
                <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 lg:block">
                    <div className={`${skeleton}${activeAndTitles}`} />
                    <div className={`${skeleton}${activeAndTitles}`} />
                    <div className={`${skeleton}${items}`} />
                    <div className={`${skeleton}${items}`} />
                    <div className={`${skeleton}${items}`} />
                    <div className={`${skeleton}${items}`} />
                    <div className={`${skeleton}${items}`} />
                    <div className={`${skeleton}${items}`} />
                    <div className={`${skeleton}${items}`} />
                    <div className={`${skeleton}${items}`} />
                </div>
            }
        >
            {list.map((item, i) => (
                <Filter key={i} item={item} />
            ))}
        </Suspense>
    );
}

const Filter = ({ item }: { item: SortFilterItemFilter }) => {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const active = searchParams.get('sort') === item.slug;
    const q = searchParams.get('q');
    const href = createUrl(
        pathname,
        new URLSearchParams({
            ...(q && { q }),
            ...(item.slug && item.slug.length && { sort: item.slug })
        })
    );


    return (
        <li className="mt-2 flex text-sm text-black dark:text-white" key={item.title}>
            <Link
                prefetch={!active ? false : undefined}
                href={href}
                className={`w-full hover:underline hover:underline-offset-4 ${active ? 'underline underline-offset-4' : ''}`}>
                {item.title}
            </Link>
        </li>
    );
}

export default Filter