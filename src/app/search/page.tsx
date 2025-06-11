import React, { Suspense } from 'react'
import SearchLoading from './loading';
import { getProducts } from '@/types/item';
import { defaultSort, sorting } from '@/lib/constants';
import { paginate } from '@/types/api';
import dynamic from 'next/dynamic';

const ProductList = dynamic(() => import("@/components/product/ProductList"), {
    ssr: false, // 
    loading: () => <SearchLoading />,
});

const SearchPage = async (props: { searchParams?: { [key: string]: string | string[] | undefined } }) => {

    const searchParams = props.searchParams;
    const { sort, q: searchValue } = searchParams as { [key: string]: string };
    const { sortKey } = sorting.find((item) => item.slug === sort) || defaultSort;
    const products = getProducts();
    const resultsText = products.length > 1 ? 'Results' : 'Result';

    const paginates = paginate(products, 1, 10);

    return (
        <Suspense fallback={<SearchLoading />}>
            {searchValue ? (
                <p className="mb-4">
                    {products.length === 0
                        ? 'There are no products that match '
                        : `Showing ${products.length} ${resultsText} for `}
                    <span className="">&quot;{searchValue}&quot;</span>
                </p>
            ) : <p className="mb-4">
                {products.length === 0
                    ? <span className="">&quot;There are no products&quot;</span>
                    : <span className="">Showings {`${products.length} ${resultsText}`}</span>
                }

            </p>}
            <ProductList initialLists={paginates} />
        </Suspense>
    );
}

export default SearchPage