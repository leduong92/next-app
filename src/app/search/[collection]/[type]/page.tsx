import { getCollectionMenus, getProducts } from '@/types/item';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react'
import SearchLoading from '../loading';

const ProductCard = dynamic(() => import("@/components/product/ProductCard"), {
    ssr: false, // 
    loading: () => <SearchLoading />
});

const TypePage = async (props: {
    params: { collection: string, type: string };
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    const params = props.params;

    const categoryMap: { [key: string]: string } = {
        "1": "living",
        "2": "dining",
        "3": "bed"
    }
    const products = getProducts();

    const productByCollection = products.filter((product) => categoryMap[product.collectionId] == params.collection);
    const collectionMenu = getCollectionMenus();
    const typeId = collectionMenu.find((collection) => collection.slug === params.collection)?.items?.find(x => x.slug === params.type);

    const filteredProducts = productByCollection.filter(x => x.typeId === typeId?.id);
    const resultsText = filteredProducts.length > 1 ? 'Results' : 'Result';
    return (
        <>
            {<p className="mb-4">
                {filteredProducts.length === 0
                    ? <span className="">There are no products</span>
                    : <span className="">Showings {`${filteredProducts.length} ${resultsText}`}</span>
                }

            </p>}
            <div className="flex flex-col gap-4">
                <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>

                    {filteredProducts.map((product) => (
                        <ProductCard
                            as={Link}
                            href={`/product/${product.slug}`}
                            key={product.id}
                            product={product}
                            animateEnter={true}
                            style={{ padding: 20 }}
                        />
                    ))}

                </div>
            </div>
        </>

    )
}

export default TypePage