"use client"
import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet"
import { Collection } from '@/types/item'
import Collections from './Collections'


const FilterMobile = ({ collections }: { collections: Collection[] }) => {
    return (
        <>
            <Sheet>
                <SheetTrigger>
                    <div className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                        </svg>
                        <span className="text-sm text-gray-800 underline underline-offset-4">Filter</span>
                    </div>
                </SheetTrigger>
                <SheetContent side={'left'}>
                    <SheetTitle></SheetTitle>
                    <Collections collections={collections} />
                </SheetContent>
            </Sheet>
        </>
    )
}

export default FilterMobile