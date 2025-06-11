"use client"
import { cn } from '@/lib/utils';
import Image, { ImageProps } from 'next/image'
import React, { useState } from 'react'
import { Skeleton } from './ui/skeleton';

type Props = {
    blurDataURL?: string;
    className?: string;
} & Omit<ImageProps, 'placeholder' | 'blurDataURL' | 'className'>;

export default function BlurSkeletonImage({
    src,
    alt,
    width,
    height,
    blurDataURL,
    className,
    ...rest
}: Props) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && (
                <Skeleton className={`absolute inset-0  w-[${width}] h-[${height}]`}>
                </Skeleton>
            )}
            <Image
                {...rest}
                src={src}
                alt={alt}
                width={width}
                height={height}
                placeholder={blurDataURL ? 'blur' : 'empty'}
                blurDataURL={blurDataURL}
                className={cn(
                    className,
                    isLoading ? 'opacity-0' : 'opacity-100'
                )}
                onLoadingComplete={() => setIsLoading(false)}
            />
        </>
    );
}