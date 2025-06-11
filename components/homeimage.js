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
        <div className="relative w-full h-[63vh] md:h-[83vh] text-yellow-50 overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover brightness-50 z-0"
                loop
                autoPlay
                muted
                playsInline
                preload="auto"
            >
                <source src="/Assets/videos/large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            
            <div className="relative z-10 flex flex-col justify-between h-full px-6 md:px-12 py-16 space-y-5">
                
                <div className="mt-auto space-y-3 max-w-[60vh] md:max-w-[75%]">
                    <h1 className="text-2xl md:text-4xl lg:text-[40px] font-semibold font-serif leading-relaxed tracking-wide">
                        Empowering Health Through{" "}
                        <br className="hidden md:block" />
                        Technology
                    </h1>

                    
                    <div
                        onMouseOver={handleHover}
                        onMouseOut={notHandleHover}
                        className="flex items-center space-x-2 group"
                    >
                        <Link
                            href="#"
                            className="text-base md:text-lg font-medium group-hover:underline"
                        >
                            Learn how we drive innovation
                        </Link>
                        <span
                            className={`transition-transform duration-300 ${
                                isHovered ? "translate-x-1" : "-translate-x-1"
                            }`}
                        >
                            <GoChevronRight className="text-base md:text-lg mt-1.5" />
                        </span>
                    </div>
                </div>

                
                <div>
                    <Link
                        href="#"
                        className="inline-block border-2 border-yellow-50 rounded-full text-base md:text-xl font-medium py-2 px-6 hover:underline transition"
                    >
                        Request Appointment
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Homeimage;
