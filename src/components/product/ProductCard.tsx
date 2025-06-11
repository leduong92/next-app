import { Product } from '@/types/item';

import {
    ElementType,
    ComponentPropsWithoutRef,
    PropsWithChildren,
} from 'react';
import BlurSkeletonImage from '../BlurSkeletonImage';


export type PolymorphicProps<
    E extends ElementType,
    P = {},
> = PropsWithChildren<P> & { as?: E } & Omit<
    ComponentPropsWithoutRef<E>,
    keyof P | 'as' | 'children'
>;

type ProductCardProps<E extends ElementType> = PolymorphicProps<
    E,
    {
        product: Product;
        animateEnter?: boolean;
    }
>;

export default function ProductCard<E extends ElementType = 'div'>({
    as,
    product,
    animateEnter,
    ...rest
}: ProductCardProps<E>) {
    const Component = as || 'div';

    return (
        <Component className="relative group flex flex-col justify-between h-ful gap-2 cursor-pointer border p-4" {...rest}>
            {product.isDiscount && (
                <div className="absolute top-3 left-3 bg-yellow-600 text-white text-xs font-semibold px-2 py-1 rounded z-[1]">
                    -{product.discount} %
                </div>
            )}
            <div className="overflow-hidden rounded-md relative h-full flex items-end group-hover:scale-105 transition-transform duration-300 z-0 ">
                <BlurSkeletonImage
                    className={`${animateEnter ? 'transition-enter ' : ''} object-scale-down w-full p-5 `}
                    style={{ maxHeight: `${product.maxHeight}px` }}
                    src={`${product.image}?profile=basic&w=400&h=400`}
                    alt={product.name}
                    quality={70}
                    width={400}
                    height={product.maxHeight}
                    loading='lazy'
                />
            </div>

            <div className="flex flex-col gap-2">
                <div className="h-full rounded-full text-left text-sm font-medium text-black truncate w-full block max-w-[160px] md:max-w-none mx-auto">{product.name}</div>
                <div className="h-full rounded-full text-left text-sm font-medium text-black truncate w-full block max-w-[160px] md:max-w-none mx-auto">{product.sku}</div>
                <div className='flex justify-between gap-4'>
                    <span className="h-full rounded-full text-sm text-gray-400 line-through">{`$ ${product.originalPrice}`}</span>
                    <span className="h-full rounded-full font-semibold">{`$ ${product.price}`}</span>
                </div>

            </div>
        </Component>
    );
}

export function ProductCardSkeleton() {
    return (
        <div className="group flex flex-col gap-2.5">
            <div
                className="
                    aspect-square overflow-hidden rounded-md bg-gray-200/50
                    relative before:absolute before:inset-0
                    before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent
                    before:translate-x-[-50%] before:opacity-0
                    before:animate-shimmer
                "
            />

            <div className="flex flex-col gap-2">
                <div className="h-2 w-4/5 rounded-full bg-gray-200" />
                <div className="h-2 w-1/3 rounded-full bg-gray-200" />
            </div>
        </div>
    );
}
