import React from 'react'
import Slider from '../components/layout/Slider'
import { getProducts } from '@/types/item'
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/components/product/ProductCard'
import dynamic from 'next/dynamic'

const ShopByCategory = dynamic(() => import("@/components/layout/ShopByCategory"), {
    ssr: false,
});

const HomePage = () => {

    const products = getProducts();

    return (
        <div className=''>
            <Slider />

            <div className='mt-5'>
                <div className='flex flex-col md:flex-row w-full '>
                    <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-white text-center p-14">
                        <p className="text-xl tracking-widest uppercase text-gray-500 mb-2">
                            Explore
                        </p>
                        <h1 className="text-4xl font-serif font-semibold mb-3 uppercase">
                            <Link href="/search/living" prefetch={true}>
                                Living Collection
                            </Link>
                        </h1>
                        <p className="text-gray-600 text-base mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nemo fugiat animi rerum? Error delectus minima, facilis incidunt asperiores, totam sequi doloribus, aspernatur expedita voluptatum veritatis? Distinctio quaerat aliquid voluptas.
                        </p>
                        <Link href="/search/living" prefetch={true}>
                            <button className="bg-black text-white px-6 py-2 tracking-wide hover:bg-gray-800 transition rounded" aria-label="SHOP NOW">
                                SHOP NOW
                            </button>
                        </Link>
                    </div>
                    <Link href="/search/living" prefetch={true} className='relative  min-h-[700px] w-full md:w-1/2'>
                        <Image src="https://theodorealexander.sirv.com/website/Frontend/Live/Menu/Banner_for_Room/living-room/1.jpg?profile=basic"
                            alt='Living Collection'
                            fill
                            className='object-contain'
                        />
                    </Link>
                </div>
            </div>

            <div className=''>
                <div className='flex flex-col md:flex-row-reverse w-full '>
                    <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-white text-center p-14">
                        <p className="text-xl tracking-widest uppercase text-gray-500 mb-2">
                            Explore
                        </p>
                        <h1 className="text-4xl font-serif font-semibold mb-3 uppercase">
                            <Link href="/search/dining" prefetch={true}>
                                Dining Collection
                            </Link>
                        </h1>
                        <p className="text-gray-600 text-base mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse commodi accusantium mollitia minima. Ipsa nemo quas maiores enim voluptatibus consectetur, aperiam rerum, unde vitae tempore cum suscipit iusto blanditiis totam!
                        </p>
                        <Link href="/search/dining" prefetch={true}>
                            <button className="bg-black text-white px-6 py-2 tracking-wide hover:bg-gray-800 transition rounded" aria-label="SHOP NOW">
                                SHOP NOW
                            </button>
                        </Link>
                    </div>
                    <Link href="/search/dining" prefetch={true} className='relative min-h-[700px] w-full md:w-1/2'>
                        <Image src="https://theodorealexander.sirv.com/website/Frontend/Live/Menu/Banner_for_Room/dining-room/1.jpg?profile=basic"
                            alt='Dining Collection'
                            fill
                            className='object-contain'
                        />
                    </Link>
                </div>
            </div>

            <div className=''>
                <div className='flex flex-col md:flex-row w-full'>
                    <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-white text-center p-14">
                        <p className="text-xl tracking-widest uppercase text-gray-500 mb-2">
                            Explore
                        </p>
                        <h1 className="text-4xl font-serif font-semibold mb-3 uppercase">
                            <Link href="/search/bed" prefetch={true}>
                                Bed Collection
                            </Link>
                        </h1>
                        <p className="text-gray-600 text-base mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse commodi accusantium mollitia minima. Ipsa nemo quas maiores enim voluptatibus consectetur, aperiam rerum, unde vitae tempore cum suscipit iusto blanditiis totam!
                        </p>
                        <Link href="/search/bed" prefetch={true}>
                            <button className="bg-black text-white px-6 py-2 tracking-wide hover:bg-gray-800 transition rounded" aria-label="SHOP NOW">
                                SHOP NOW
                            </button>
                        </Link>
                    </div>
                    <Link href="/search/bed" prefetch={true} className='relative min-h-[700px] w-full md:w-1/2'>
                        <Image src="https://theodorealexander.sirv.com/website/Frontend/Live/Menu/Banner_for_Room/bedroom/1.jpg?profile=basic"
                            alt='Bed Collection'
                            fill
                            className='object-contain'
                        />
                    </Link>
                </div>
            </div>

            <ShopByCategory products={products} />

            <div className='mt-12 px-4 md:px-8 lg:px-16 mx-auto text-center'>
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
                    Featured This Week
                </h1>
                <div className='mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 '>
                    {products.filter(x => x.isFeatured === true).map((product) => (
                        <ProductCard
                            as={Link}
                            prefetch={true}
                            href={`/product/${product.slug}`}
                            key={product.id}
                            product={product}
                            animateEnter={true} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage