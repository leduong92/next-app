"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import CartModal from '../cart/CartModal';

const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const isLoggedIn = false;
    const handleProfile = () => {

        setIsProfileOpen(prev => !prev);
    }

    return (
        <div className='flex items-center gap-4 xl:gap-6 relative'>

            <button onClick={handleProfile} aria-label="Profile">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </button>

            {isProfileOpen && (
                <div className='absolute p-5 rounded-md top-8 -left-5 text-sm bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-10 w-max'>
                    <Link href="/user/profile" prefetch={true} className='flex justify-between items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 w-1/3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span className='w-2/3 px-2'>Profile</span>
                    </Link>
                    <Link href="/user/logout" prefetch={true} className='mt-2 flex justify-between items-center cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 w-1/3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                        </svg>

                        <span className='w-2/3 px-2'>Logout</span>
                    </Link>
                </div>
            )}

            <CartModal />
        </div>
    )
}

export default NavIcons