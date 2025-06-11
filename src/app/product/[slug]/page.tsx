import AddToCart from '@/components/cart/AddToCart'
import { getProduct, Product } from '@/types/item'
import React, { Suspense } from 'react'
import ProductLoadingPage from '../loading'
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

const ProductImages = dynamic(() => import("@/components/product/ProductImages"), {
    ssr: false,
    loading: () => <ProductLoadingPage />
});

const SinglePage = ({ params }: { params: { slug: string } }) => {

    if (!params?.slug) {
        return notFound();
    }

    const product = getProduct(params.slug) as Product;

    return (
        <Suspense fallback={<ProductLoadingPage />}>
            <div className="px-4 pt-6 md:px-8 lg:px-16 relative flex flex-col lg:flex-row gap-10">

                <div className="w-full lg:w-1/2 lg:sticky top-[120px] h-max">
                    <ProductImages product={product} />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col gap-3">
                    <h1 className="text-3xl font-medium">{product?.name}</h1>
                    <h1 className="text-xl">{product?.sku}</h1>
                    <p className="text-gray-800 leading-loose">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed repudiandae eius dolorum eligendi, officiis amet animi! Nisi quos quaerat obcaecati incidunt sit est aliquam dolor perspiciatis? Sed repellendus modi reiciendis.</p>
                    <div className="h-[2px] bg-gray-100" />
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl text-gray-800 line-through">
                            ${product?.originalPrice}
                        </h2>
                        <h3 className="font-medium text-2xl">
                            ${product?.price}
                        </h3>
                    </div>
                    <div className="h-[2px] bg-gray-100" />

                    <AddToCart product={product} />


                </div>
            </div>
        </Suspense>
    )
}

export default SinglePage