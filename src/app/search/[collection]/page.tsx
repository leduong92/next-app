import { defaultSort, sorting } from '@/lib/constants';
import { getProducts } from '@/types/item';
import React, { Suspense } from 'react'
import SearchLoading from '../loading';
import { paginate } from '@/types/api';
import dynamic from 'next/dynamic';

const ProductList = dynamic(() => import("@/components/product/ProductList"), {
    ssr: false, // 
    loading: () => <SearchLoading />,
});

const CategoryPage = async (props: {
    params: { collection: string };
    searchParams: { [key: string]: string | string[] | undefined }
}) => {

    const { sort } = props.searchParams as { [key: string]: string };
    const { sortKey } = sorting.find((item) => item.slug === sort) || defaultSort;

    const products = getProducts();

    const categoryMap: { [key: string]: string } = {
        "1": "living",
        "2": "dining",
        "3": "bed"
    }
    let filteredProducts = products.filter((product) => categoryMap[product.collectionId] === props.params.collection)

    const resultsText = filteredProducts.length > 1 ? 'Results' : 'Result';
    const paginates = paginate(filteredProducts, 1, 10);

    return (
        <Suspense fallback={<SearchLoading />}>
            {<p className="mb-4">
                {filteredProducts.length === 0
                    ? <span className="">&quot;There are no products&quot;</span>
                    : <span className="">Showings {`${filteredProducts.length} ${resultsText}`}</span>
                }

            </p>}
            <ProductList initialLists={paginates} />

        </Suspense>
    )
}

export default CategoryPage