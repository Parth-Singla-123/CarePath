"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Search2() {
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
                    setItems(result.data.map(item => item.disease_name));
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
        <div className="bg-gradient-to-r from-green-600 to-green-900 pt-16 pb-24">
            <div className="flex flex-col items-center w-5/6 mx-auto text-white">
                {/* Heading Section */}
                <div className="text-center space-y-4">
                    <h2 className="text-6xl font-serif font-semibold">Know More About Diseases</h2>
                    <h3 className="text-2xl font-serif">Easy To Understand Answers About Diseases</h3>
                </div>

                {/* Search Form Section */}
                <div className="mt-10 w-full max-w-4xl space-y-4 relative">
                    <h1 className="text-xl font-medium text-white">Search About Diseases & Conditions</h1>
                    <form onSubmit={handleSubmit} className="relative">
                        <div className="relative flex items-center">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                                <svg
                                    className="h-6 w-6 text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"
                                    />
                                    <path
                                        fill="currentColor"
                                        d="M21.707 20.293l-3.97-3.97a10.086 10.086 0 01-1.414 1.414l3.97 3.97a1 1 0 001.414-1.414z"
                                    />
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
                                className="text-2xl text-black block w-full pl-14 pr-24 py-3 rounded-full border-2 border-black focus:ring-4 focus:ring-green-500"
                            />
                            {!isEmpty && (
                                <button
                                    type="submit"
                                    className="absolute inset-y-0 right-0 flex items-center px-8 bg-blue-900 text-white text-xl rounded-e-full hover:bg-blue-800 active:bg-blue-700 transition"
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </form>

                    {/* Autocomplete Dropdown */}
                    {!isEmpty && (
                        <div className="absolute text-lg top-24 left-6 right-0 bg-white shadow-lg rounded-md text-gray-700 z-50 w-1/3">
                            <ul className="space-y-1 p-2">
                                {items.map((item, idx) => (
                                    <li key={idx}>
                                        <button
                                            className="block w-full text-left py-2 px-4 hover:bg-gray-100 rounded-md transition"
                                            onClick={handleClick}
                                            name={item}
                                        >
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Search2;