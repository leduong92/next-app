'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Breadcrumb = () => {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(segment => segment);
    const breadcrumbs = ['Home', ...segments];
    return (
        <div className="px-4 md:px-8 lg:px-16 z-10 sticky top-[64px] border-b border-gray-200 bg-white/80  py-2 backdrop-blur-sm backdrop-saturate-200 dark:bg-black/50">
            <nav className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
                {breadcrumbs.map((segment, i) => {
                    const href = i === 0 ? '/' : `/${breadcrumbs.slice(1, i + 1).join('/')}`;
                    return (
                        <span key={i}>
                            {i > 0 && ' / '}
                            <Link href={`${href.includes('product') && i !== breadcrumbs.length - 1 ? href.replace('product', 'search') : href}`}
                                className="capitalize hover:underline hover:underline-offset-4 transition-colors hover:text-foreground inline-flex items-center">
                                <span className={`${i === breadcrumbs.length - 1 ? 'truncate max-w-[120px] sm:max-w-[150px] md:max-w-none' : ''} block whitespace-nowrap`}>
                                    {decodeURIComponent(segment.replace('-', " "))}
                                </span>
                            </Link>
                        </span>
                    );
                })}
            </nav>
        </div>
    )
}

export default Breadcrumb