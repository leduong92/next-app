"use client"
import { getProducts, Product } from '@/types/item'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import { paginate } from '@/types/api';
import dynamic from 'next/dynamic';

const ProductCard = dynamic(() => import("@/components/product/ProductCard"), {
    ssr: false, // 
});

const ProductList = ({ initialLists }: { initialLists: Product[] }) => {
    const [products, setProducts] = useState(initialLists);
    const [page, setPage] = useState(2);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true)
    const loaderRef = useRef<HTMLDivElement | null>(null);

    const loadMore = useCallback(async () => {
        if (loading || !hasMore) return;

        setLoading(true);
        try {
            const res = getProducts();
            const pageSize = 10;
            const totalPages = Math.ceil(res.length / pageSize);

            if (page > totalPages) {
                setHasMore(false);
                setLoading(false);
                return;
            }

            const newList = paginate(res, page, pageSize);
            setProducts(prev => {
                const existingIds = new Set(prev.map(p => p.id));
                const filteredNewList = newList.filter(p => !existingIds.has(p.id));
                return [...prev, ...filteredNewList];
            });
            setPage(prev => prev + 1);
        } catch (error) {
            setLoading(false);
            console.error('Error loading more products:', error);
        } finally {
            setLoading(false);
        }
    }, [page, hasMore, loading])

    useEffect(() => {
        const pageSize = 10;
        const totalPages = Math.ceil(getProducts().length / pageSize);
        setHasMore(initialLists.length >= pageSize && page <= totalPages);
    }, [initialLists, page]);

    useEffect(() => {
        if (!loaderRef.current || !hasMore) return;

        const loader = loaderRef.current;
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !loading) {
                loadMore();
            }
        }, { threshold: 1.0 });

        observer.observe(loader)

        return () => {
            if (loader) {
                observer.unobserve(loader)
            }
        }
    }, [loadMore, loading, hasMore])


    return (
        <>
            <div className="flex flex-col gap-4">
                <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                    {products.map((product) => (
                        <ProductCard
                            as={Link}
                            href={`/product/${product.slug}`}
                            key={product.id}
                            product={product}
                            animateEnter={true}
                            style={{ padding: 20 }}

                        />
                    ))}
                    <div ref={loaderRef} className='h-12 flex items-center justify-center'>
                        {loading && <p>Loading...</p>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList