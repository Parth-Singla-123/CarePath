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
        <div className="py-24 px-14 bg-green-50 rounded-[70px] h-4/5">            
            <div className="text-black flex flex-row space-x-20">
                <div className="w-3/5 flex flex-col my-auto mx-auto space-y-6 text-4xl font-semibold text-teal-600 font-sans">
                    <h5 className="text-base font-medium mb-12">FEATURES SPECIALITIES</h5>
                    <Link href="#" onMouseOver={handleHover} name="" id="0" className={isHovered[0] ? 'underline scale-105 text-teal-700 transition-transform duration-200' : ''}>Virtual Professionals Consultation</Link>
                    <Link href="#" onMouseOver={handleHover} name="" id="1" className={isHovered[1] ? 'underline scale-105 text-teal-700 transition-transform duration-200' : ''}>Health Records Manage</Link>
                    <Link href="#" onMouseOver={handleHover} name="" id="2" className={isHovered[2] ? 'underline scale-105 text-teal-700 transition-transform duration-200' : ''}>Virtual Prescription</Link>
                    <Link href="/Search" onMouseOver={handleHover} name="" id="3" className={isHovered[3] ? 'underline scale-105 text-teal-700 transition-transform duration-200' : ''}>Know More about Diseases</Link>
                </div>
                <div className="w-2/5 flex flex-col space-y-8">
                    <Image src={data.img} alt="consulation" width={325} height={400} className="mx-auto rounded-lg shadow-sm shadow-green-950"/>
                    <p className="w-[325px] mx-auto text-[17px] text-gray-600 font-medium font-serif">{data.info}</p>
                </div>
            </div>
        </div>
    )
}

export default Special;