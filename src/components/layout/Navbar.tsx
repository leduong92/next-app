import Link from 'next/link'
import React, { Suspense } from 'react'
import NavMobile from './NavMobile'
import Image from 'next/image'
import SearchBar from './SearchBar'
import NavIcons from './NavIcons'

const Navbar = () => {
    return (
        <div className='h-16 px-4 md:px-8 lg:px-16 xl:32 2xl:64 sticky top-0 backGround boxShadown backDropFilter z-50'>
            {/* MOBILE */}
            <div className='h-full flex items-center justify-between md:hidden'>
                <Link href="/">
                    <div className='text-xl md:text-2xl tracking-wide'>ECOM</div>
                </Link>
                <NavMobile />
            </div>
            {/* BIGGER Screen */}
            <div className='hidden md:flex items-center h-full justify-between gap-8 sticky top-0'>
                {/* LEFT */}
                <div className='w-1/3 xl:w-1/2 flex gap-4 items-center'>
                    <Link href="/" prefetch={true} className='flex items-center gap-3 outline-none'>
                        <Image src="/logo.png" alt='' width={24} height={24} />
                        <div className='text-2xl tracking-wide'>ECOM</div>
                    </Link>
                    <div className='hidden xl:flex gap-4'>
                        <Link href="/" prefetch={true}><span className="underline-hover ">Home</span></Link>
                        {/* Main Dropdown */}
                        <div className="relative group">
                            <span className="underline-hover ">
                                Collections
                            </span>

                            {/* Level 1 Dropdown */}
                            <div className="absolute top-full left-0 bg-white shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 z-30">
                                <div className="min-w-[220px] py-2">

                                    {/* Sofa Collection (Has Submenu) */}
                                    <div className="relative group/living">
                                        <Link href="/search/living" prefetch={true} className="block px-4 py-2">
                                            <span className="underline-hover">
                                                Living Collection
                                            </span>
                                        </Link>

                                        {/* Level 2 Dropdown */}
                                        <div className="absolute top-0 left-full bg-white shadow-lg invisible opacity-0 group-hover/living:visible group-hover/living:opacity-100 transition-opacity duration-200">
                                            <ul className="min-w-[220px] py-2">
                                                <li><Link href="/search/living/sofa" prefetch={true} className="block px-4 py-2"><span className="underline-hover">6 Sofas</span></Link></li>
                                                <li><Link href="/search/living/side-table" prefetch={true} className="block px-4 py-2"><span className="underline-hover">6 Side Tables</span></Link></li>
                                                <li><Link href="/search/living/console-table" prefetch={true} className="block px-4 py-2"><span className="underline-hover">6 Console Tables</span></Link></li>
                                                <li><Link href="/search/living/arm-chair" prefetch={true} className="block px-4 py-2"><span className="underline-hover">6 Arm Chairs</span></Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Other level 1 items */}
                                    <div className='relative group/dining'>
                                        <Link href="/search/dining" prefetch={true} className="block px-4 py-2 cursor-pointer">
                                            <span className="underline-hover ">
                                                Dining Collection
                                            </span>
                                        </Link>

                                        {/* Level 2 Dropdown */}
                                        <div className="absolute top-0 left-full bg-white shadow-lg invisible opacity-0 group-hover/dining:visible group-hover/dining:opacity-100 transition-opacity duration-200">
                                            <ul className="min-w-[220px] py-2">
                                                <li><Link href="/search/dining/dining-chair" prefetch={true} className="block px-4 py-2 h"><span className="underline-hover">6 Dining Chairs</span></Link></li>
                                                <li><Link href="/search/dining/dining-table" prefetch={true} className="block px-4 py-2 h"><span className="underline-hover">6 Dining Tables</span></Link></li>
                                                <li><Link href="/search/dining/side-boards" prefetch={true} className="block px-4 py-2 h"><span className="underline-hover">6 Side Boards</span></Link></li>
                                                <li><Link href="/search/dining/coffee-table" prefetch={true} className="block px-4 py-2"><span className="underline-hover">6 Coffe Tables</span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='relative group/bed'>
                                        <Link href="/search/bed" prefetch={true} className="block px-4 py-2 cursor-pointer">
                                            <span className="underline-hover ">
                                                Bed Collection
                                            </span>
                                        </Link>
                                        {/* Level 2 Dropdown */}
                                        <div className="absolute top-0 left-full bg-white shadow-lg invisible opacity-0 group-hover/bed:visible group-hover/bed:opacity-100 transition-opacity duration-200">
                                            <ul className="min-w-[220px] py-2">
                                                <li><Link href="/search/bed/bed" prefetch={true} className="block px-4 py-2 "><span className="underline-hover">6 Beds</span></Link></li>
                                                <li><Link href="/search/bed/night-stand" prefetch={true} className="block px-4 py-2 "><span className="underline-hover">6 NightStands</span></Link></li>
                                                <li><Link href="/search/bed/dresser" prefetch={true} className="block px-4 py-2 "><span className="underline-hover">6 Dresser</span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link href="/about" prefetch={true}><span className='underline-hover'>About</span></Link>
                        <Link href="/contact" prefetch={true}><span className='underline-hover'>Contact</span></Link>
                    </div>
                </div>
                {/* RIGHT */}
                <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
                    <SearchBar />
                    <NavIcons />
                </div>
            </div>
        </div>
    )
}

export default Navbar