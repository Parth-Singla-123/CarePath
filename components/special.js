"use client"
import React,{useState} from "react";
import Link from "next/link";
import Image from "next/image";
import info from "@/public/Assets/data/specialdata";

function Special() {
    const [isHovered,changeHover] = useState([true,false,false,false]);
    const [data,setData] = useState({
        img:info[0].img,
        info:info[0].info,
    });
    
    function handleHover(event) {
        const idx = parseInt(event.target.id);
        setTimeout(() => {
            changeHover((prevValue) => {
                prevValue=[false,false,false,false];
                prevValue[idx] = true;
                return prevValue;
            })
            setData(() => {
                const item = info.filter((infoItem,index)=>{
                    return index===idx;
                })[0];
                console.log(item);
                return (
                    {
                        img:item.img,
                        info:item.info,
                    }
                )
            })
        }, 75);
    }

    return (
        <div className="py-16 px-4 sm:px-8 md:px-14 bg-green-50 rounded-3xl sm:rounded-[70px]">
            <div className="text-black flex flex-col lg:flex-row lg:space-x-20 space-y-12 lg:space-y-0">
                <div className="w-full lg:w-3/5 flex flex-col my-auto mx-auto space-y-6 text-2xl sm:text-3xl lg:text-4xl font-semibold text-teal-600 font-sans text-center lg:text-left">
                    <h5 className="text-sm sm:text-base font-medium mb-4 sm:mb-8">FEATURES SPECIALITIES</h5>
                    <Link href="#" onMouseOver={handleHover} id="0" className={isHovered[0] ? 'underline scale-105 text-teal-700 transition-transform duration-200' : ''}>Virtual Professionals Consultation</Link>
                    <Link href="#" onMouseOver={handleHover} id="1" className={isHovered[1] ? 'underline scale-105 text-teal-700 transition-transform duration-200' : ''}>Health Records Manage</Link>
                    <Link href="#" onMouseOver={handleHover} id="2" className={isHovered[2] ? 'underline scale-105 text-teal-700 transition-transform duration-200' : ''}>Virtual Prescription</Link>
                    <Link href="/Search" onMouseOver={handleHover} id="3" className={isHovered[3] ? 'underline scale-105 text-teal-700 transition-transform duration-200' : ''}>Know More about Diseases</Link>
                </div>
                <div className="w-full lg:w-2/5 flex flex-col space-y-6 items-center">
                    <Image src={data.img} alt="consulation" width={325} height={400} className="mx-auto rounded-lg shadow-lg shadow-green-950"/>
                    <p className="w-full max-w-[325px] mx-auto text-[15px] sm:text-[17px] text-green-900 font-medium font-sans text-center lg:text-left">{data.info}</p>
                </div>
            </div>
        </div>
    )
}

export default Special;
