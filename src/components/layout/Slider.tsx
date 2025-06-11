"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
    {
        id: 1,
        title: "Summer Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://theodorealexander.sirv.com/website/Frontend/Live/Menu/Banner_for_Collection/sloane/4.jpg?profile=basic",
        url: "/search",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
        id: 2,
        title: "Winter Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://theodorealexander.sirv.com/website/Frontend/Live/Menu/Banner_for_Collection/spencer-london/6.jpg?profile=basic",
        url: "/search",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
        id: 3,
        title: "Spring Collections",
        description: "Sale! Up to 50% off!",
        img: "https://theodorealexander.sirv.com/website/Frontend/Live/Menu/Banner_for_Collection/maxwell/3.jpg?profile=basic",
        url: "/search",
        bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
    {
        id: 4,
        title: "Spring Collections",
        description: "Sale! Up to 50% off!",
        img: " https://theodorealexander.sirv.com/website/Frontend/Live/Menu/Banner_for_Collection/luna/1.jpg?profile=basic",
        url: "/search",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },

];

const Slider = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden">
            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition z-10"
                onClick={prevSlide}
                aria-label="Prev"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 lg:size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

            </button>
            <div className="w-max h-full flex transition-all ease-in-out duration-1000"
                style={{ transform: `translateX(-${current * 100}vw)` }}>

                {slides.map((slide) => (
                    <div key={slide.id} className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row relative`}>
                        {/* TEXT */}

                        <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 xl:gap-12 text-center p-14">
                            <h2 className="text-xl lg:text-3xl 2xl:text-5xl">{slide.description}</h2>
                            <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">{slide.title}</h1>
                            <Link href={slide.url} className="">
                                <button className="rounded bg-black text-white py-2 px-4 hover:bg-gray-800">SHOP NOW</button>
                            </Link>

                        </div>
                        {/* Image */}

                        <Link href={slide.url} className=" h-full w-full relative cursor-pointer">
                            <Image src={slide.img} alt=""
                                className="object-cover transition-all duration-500"
                                fill
                                loading="lazy"
                            />
                        </Link>
                    </div>
                ))}

            </div>
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition"
                onClick={nextSlide}
                aria-label="Next"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 lg:size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </button>
            {/* <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
                {
                    slides.map((slide, index) => (
                        <div key={slide.id} className={`w-3 h-3 rounded-full ring-1 ring-gray-500 cursor-pointer flex items-center 
                        justify-center ${current == index ? "scale-150" : ""}`}
                            onClick={() => setCurrent(index)}
                        >
                            {current == index && (<div className="w-[6px] h-[6px] bg-gray-500 rounded-full"></div>)}
                        </div>
                    ))
                }
            </div> */}
        </div>
    )
}

export default Slider