"use client"
import React, { useEffect, useRef, useState } from 'react'

import { FilterItemList } from './Filter'
import { sorting } from '@/lib/constants'

const SortMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const toggleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node) &&
                !toggleRef.current?.contains(event.target as Node)
            ) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <>
            <div className="relative flex items-center gap-1 cursor-pointer"
                onClick={() => setIsOpen((prev => !prev))}
                ref={toggleRef}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
                <span className="text-sm text-gray-800 underline underline-offset-4">Sort</span>
            </div>
            {isOpen && (
                <div ref={modalRef} className='absolute top-11 right-3 z-10 p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95'>
                    <FilterItemList list={sorting} />
                </div>
            )}

        </>

    )
}

export default SortMobile