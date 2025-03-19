"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

const diseases = ["Asthma", "Tubercolosis", "Influenza", "Malaria", "Dengue", "Cholera","Polio"];
var i = 0;

function Care() {
    const [di, setDisease] = useState(diseases[0]);
    const [isHovered, setHover] = useState(false);
    const [isChange, setChange] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            i = (i + 1) % diseases.length;
            setChange(true);
            setTimeout(() => {
                setDisease(diseases[i]);
                setChange(false);
            }, 1000)
        }, 2000);
        return () => clearInterval(intervalId);
    }, []);

    function handleHover() {
        setHover(true);
    }
    function notHandleHover() {
        setHover(false);
    }

    return (
        <div className="text-center my-16 font-medium">
            <h1 className="text-[85px] text-green-900 font-medium font-serif">Get Care Today For</h1>
            <div className="text-[70px] text-teal-700 -mt-4"><h1 className={isChange ? "animate-change1" : "animate-change2"}>{di}</h1></div>
            <div className="flex flex-row place-content-center">
                <Link href="#" className="text-lg text-green-800 font-semibold font-sans" onMouseOver={handleHover} onMouseLeave={notHandleHover} >Consult doctors for treatment</Link>
                <span className={isHovered ? "translate-x-1 transition-all duration-500" : "-translate-x-1 transition-all duration-500"}><GoChevronRight className="text-green-800 font-semibold text-base mt-2 ml-1" /></span>
            </div>
            <h1 className="text-[80px] text-green-900 font-medium font-serif w-3/5 mx-auto leading-[75px] mt-10">Fall in love with your doctor’s office</h1>
        </div>
    )
}

export default Care;