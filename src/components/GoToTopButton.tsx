"use client"
import React, { useEffect, useState } from 'react'

const GoToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, [])

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <button className={`fixed bottom-6 right-6 z-50 p-2 rounded-full bg-black text-white shadow-lg transition-opacity duration-500
            ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'} `}
            aria-label='Scroll to top'
            onClick={handleScrollTop}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
            </svg>

        </button>
    )
}

export default GoToTopButton