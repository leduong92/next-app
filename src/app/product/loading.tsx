import React from 'react'
import { Skeleton } from '../../components/ui/skeleton'

const ProductLoadingPage = () => {
    return (
        <div className="px-4 pt-6 md:px-8 lg:px-16 relative flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-1/2 lg:sticky top-[120px] h-max">
                <Skeleton className='h-[600px]' />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-5">
                <Skeleton className="w-72 h-7"></Skeleton>
                <Skeleton className="w-52 h-7"></Skeleton>
                <Skeleton className='w-full h-7' />
                <Skeleton className="w-72 h-7"></Skeleton>
                <Skeleton className="w-52 h-7"></Skeleton>
                <Skeleton className='w-80 h-7' />
                <Skeleton className='w-28 h-7' />
                <Skeleton className='w-1/3 h-7' />
                <Skeleton className='w-1/2 h-7' />
            </div>
        </div>
    )
}

export default ProductLoadingPage