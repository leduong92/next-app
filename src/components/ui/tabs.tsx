"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export type Item = {
    text: string;
    slug?: string;
    segment?: string;
}

export function Tabs({ basePath, items }: { basePath: string, items: Item[] }) {
    return (
        <div className="flex flex-wrap items-center gap-2">
            {items.map((item) => (
                <Tab key={basePath + item.slug} item={item} basePath={basePath} />
            ))}
        </div>
    )
}

export function Tab({ basePath = '', item }: { basePath?: string, item: Item }) {
    const href = item.slug ? `${basePath}/${item.slug}` : basePath;
    return (
        <Link href={href} prefetch={true} className="text-sm font-semibold" scroll={false}>
            <TabContent href={href}>{item.text}</TabContent>
        </Link>
    )
}

export function TabContent({ children, href }: { children: React.ReactNode, href?: string }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <span className={`flex rounded-md px-3 py-1 transition duration-75 bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white 
        ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-500 delay-75'}`}>
            {children}
        </span>
    )
}