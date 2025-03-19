"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Search1() {
    const router = useRouter();
    const [di, setDi] = useState("");
    const [items, setItems] = useState([]);
    const [isEmpty, setEmpty] = useState(true);

    function handleClick(event) {
        setDi(event.target.name);
        setItems([]);
    }

    function handleSearch(event) {
        const val = event.target.value;
        if (val === "") setEmpty(true);
        else setEmpty(false);
        setDi(val);
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.push(`/Search?disease=${di}`);
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('api/add/search_di', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ di }),
                });

                const result = await response.json();
                if (result.success && Array.isArray(result.data)) {
                    setItems(result.data);
                } else {
                    setItems([]);
                }
            }
            catch (error) {
                console.log("cannot fetch data");
            }
        }
        if (di) {
            fetchData();
        }
    }, [di])
    return (
        <div>
            <div className="text-4xl text-green-800 font-semibold text-center mx-auto font-serif my-10">
                <h1>&#x275D; Know the disease, fight the cure! &#x275E;</h1>
            </div>
            <div className="flex flex-row mt-10 mb-14 place-content-center space-x-10">
                <div className="w-2/5">
                    <video
                        className="brightness-50 block rounded-3xl shadow-lg shadow-green-900"
                        loop
                        autoPlay
                        muted
                        playsInline
                        preload="auto"
                    >
                        <source src="/Assets/videos/66101-516544911_large.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="text-black flex flex-col justify-items-end space-y-5 w-[45%]">
                    <h2 className="text-2xl font-semibold ml-8 text-gray-800">Search diseases & conditions</h2>
                    <div className="flex flex-col space-y-3">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-row absolute w-[45%]">
                                <div className="w-7 relative top-3.5 left-10 text-green-700">
                                    <svg
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6"
                                    >
                                        <path d="M10,2a8,8,0,1,0,8,8A8.00917,8.00917,0,0,0,10,2ZM4,10a6,6,0,1,1,6,6A6.00657,6.00657,0,0,1,4,10Z"></path>
                                        <path d="M21.707,20.293,17.73816,16.3241a10.08573,10.08573,0,0,1-1.41406,1.41406L20.293,21.707A.99989.99989,0,0,0,21.707,20.293Z"></path>
                                    </svg>
                                </div>
                                <input
                                    type="search"
                                    name="disease"
                                    id="disease"
                                    placeholder="Search"
                                    onChange={handleSearch}
                                    value={di}
                                    autoComplete="off"
                                    className={`text-[22px] border-gray-600 border-2 pl-12 pr-3 py-3 h-14 rounded-full w-full placeholder-gray-400 ${isEmpty ? "" : "ring-4 ring-green-600 border-green-700 ring-offset-[3px] outline-none transition-shadow duration-150 ease-in" }`}
                                />
                                {isEmpty ? (
                                    <button></button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="relative right-6 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-e-full ring-4 ring-green-600 ring-offset-[3px] text-xl px-8 py-2 transition-colors duration-100 ease-in-out shadow-md active:shadow-lg active:bg-blue-700"
                                    >
                                        Submit
                                    </button>
                                )}
                            </div>
                        </form>
                        {!isEmpty && (
                            <div className="relative mx-16 w-2/5 bg-white rounded-md text-slate-700 border-[1.5px] border-gray-300 shadow-lg z-50 top-14">
                                <ul className="flex flex-col space-y-0.5 text-lg font-semibold p-2">
                                    {items.map((item, idx) => (
                                        <button
                                            key={idx}
                                            className="py-2 px-3 hover:bg-green-50 rounded-md text-left transition-colors duration-150"
                                            onClick={handleClick}
                                            name={item.disease_name}
                                        >
                                            {item.disease_name}
                                        </button>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Search1;