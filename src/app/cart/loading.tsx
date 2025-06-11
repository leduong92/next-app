import React from 'react'
import { Skeleton } from '../../components/ui/skeleton'

const CartLoadingPage = () => {
    return (
        <div className='flex flex-col md:flex-row gap-5 md:h-[calc(100vh-264px)] p-8 w-full'>
            <div className='overflow-y-auto max-h-screen scrollbar-hide md:w-2/3'>
                {Array(5).fill(0).map((_, idx) => {

                    return (
                        <div className='overflow-y-auto max-h-screen scrollbar-hide' key={idx}>
                            <div className="flex py-2 justify-between border mb-4 p-4">
                                <div className='flex items-center justify-center w-max' >
                                    <Skeleton className='w-[150px] h-[150px]' />
                                </div>
                                <div className="flex flex-col justify-between px-2">
                                    <div className='flex flex-col gap-2'>
                                        <Skeleton className='w-80 h-5' />
                                        <Skeleton className='w-52 h-5' />
                                    </div>
                                    <div className='flx flex-col gap-2'>
                                        <Skeleton className='w-40 h-5' />
                                        <Skeleton className='w-20 h-5' />
                                    </div>
                                </div>
                                <div className='flex flex-col justify-between items-end text-right w-max'>
                                    <div className='flex flex-col gap-2'>
                                        <Skeleton className='w-20 h-5' />
                                        <Skeleton className='w-20 h-5' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='border p-4 rounded h-max md:w-1/3'>
                <div className='py-4 flex flex-col gap-2 '>
                    <div className='flex flex-col justify-between gap-2'>
                        <div className='flex justify-between'>
                            <Skeleton className='w-20 h-5' />
                        </div>
                        <div className='flex justify-between'>
                            <Skeleton className='w-96 h-5' />
                        </div>
                        <div className='flex justify-between'>
                            <Skeleton className='w-40 h-5' />
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <Skeleton className='w-40 h-5' />
                        <Skeleton className='w-20 h-5' />
                        <Skeleton className='w-96 h-5' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartLoadingPage