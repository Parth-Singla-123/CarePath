"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

function Homeimage() {
    const [isHovered, setHover] = useState(false);

    function handleHover() {
        setHover(true);
    }
    
    function notHandleHover() {
        setHover(false);
    }

    return (
        <div className="container text-yellow-50">
            <div className="h-2/3 md:h-full relative">
                <video
                    className="brightness-50 block w-full h-auto md:h-full object-cover"
                    loop
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                >
                    <source src="/Assets/videos/197486-905015022_medium.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <h1 className="text-3xl md:text-5xl p-5 font-semibold font-serif absolute top-1/3 left-4 md:top-1/2 md:left-2">
                Empowering Health Through <br /> Technology
            </h1>
            <div onMouseOver={handleHover} onMouseOut={notHandleHover}>
                <div className="flex flex-row absolute top-1/2 left-6 md:top-2/3 md:left-8 my-9">
                    <Link href="#" className="text-base md:text-lg font-medium">
                        Learn how we drive innovation
                    </Link>
                    <span
                        className={`${
                            isHovered ? "translate-x-1" : "-translate-x-1"
                        } transition-all duration-500`}
                    >
                        <GoChevronRight className="font-semibold text-base md:text-lg mt-1.5 ml-1" />
                    </span>
                </div>
            </div>
            <Link
                href="#"
                className="border-yellow-50 border-2 rounded-full text-base md:text-xl font-medium absolute top-3/4 left-8 md:top-2/3 md:left-72 py-1.5 px-2.5 mx-5 my-8 hover:underline"
            >
                Request Appointment
            </Link>
        </div>
    );
}

export default Homeimage;
