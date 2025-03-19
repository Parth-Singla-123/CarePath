"use client"

import React from "react";
import Link from "next/link";

import Image from "next/image";

function content() {
    return (
        <div className=" font-serif py-10 rounded-[50px] bg-gradient-to-bl from-green-50 via-green-200 to-green-50 mb-32">
            <div className="flex flex-row mx-auto place-content-center space-x-16 py-8 mb-10">
                <div className="text-black flex flex-col w-1/3 space-y-5 my-auto">
                    <h1 className="text-4xl font-bold">Healing Starts Here</h1>
                    <div>
                        <h2 className="text-xl font-bold">The right answers the first time</h2>
                        <p className="text-lg font-medium">Effective treatment depends on getting the right diagnosis. Our experts diagnose and treat the toughest medical challenges.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">One of the Top-ranked</h2>
                        <p className="text-lg font-medium">CarePath has more No. 1 rankings than any other hospital in the nation according to India News & Times</p>
                    </div>
                    <Link href="/About" className="text-xl rounded-full p-2 text-green-600 w-32 border-green-600 border-2 text-center hover:underline underline-offset-2">Learn more</Link>
                </div>
                <div className="w-2/5 mx-auto">
                    <Image src="/Assets/images/istockphoto-1263873023-612x612.jpg" alt="doctor" width={420} height={1500} className="rounded-3xl mx-auto shadow-md shadow-green-950" />
                </div>
            </div>

            <div className="h-[0.5px] bg-[#09470870] my-6 w-2/3 mx-auto"></div>

            <div className="flex flex-row-reverse mx-auto place-content-center -space-x-20 py-8 mt-10">
                <div className="text-black flex flex-col w-1/3 space-y-5 my-auto pl-10">
                    <h1 className="text-4xl font-bold">World-class care for global patients</h1>
                    <div>
                        <p className="text-lg font-medium">We make it easy for patients around the world to get care from CarePath.</p>
                    </div>
                    <Link href="#" className="text-xl font-medium rounded-full p-2 text-green-700 w-64 border-green-700 border-2 text-center hover:underline underline-offset-2">Book Appointment Now</Link>
                </div>
                <div className="w-2/5">
                    <Image src="/Assets/images/nursecare.jpg" alt="doctor" width={420} height={1500} className="rounded-3xl shadow-md shadow-yellow-950" />
                </div>
            </div>

        </div>


    )
}

export default content;