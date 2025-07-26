"use client";

import React, { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import { HiSearch } from "react-icons/hi";

function Search1() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [allDiseases, setAllDiseases] = useState([]); // Should be fetched as you have it
  const [filtered, setFiltered] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  // Function to handle clicking on a suggested disease name
  function handleClick(event) {
    const diseaseName = event.target.name;
    setQuery(diseaseName);
    setFiltered([]);
    router.push(`/Search?disease=${encodeURIComponent(diseaseName)}`);
  }

  // Handle input change and filter disease list
  function handleSearch(event) {
    const val = event.target.value;
    setQuery(val);
    const isEmptyValue = val.trim() === "";
    setIsEmpty(isEmptyValue);

    if (!isEmptyValue && allDiseases.length > 0) {
      const matches = allDiseases.filter((d) =>
        d.disease_name.toLowerCase().includes(val.toLowerCase()));
      
      const prioritized = [
        ...matches.filter((d) => d.disease_name.toLowerCase().startsWith(val.toLowerCase())),
        ...matches.filter((d) => !d.disease_name.toLowerCase().startsWith(val.toLowerCase())),
      ];

      setFiltered(prioritized.slice(0, 5));
      
    } else {
      setFiltered([]);
    }
  }

  // On input submit, route to the search page with query
  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/Search?disease=${encodeURIComponent(query)}`);
    }
  }

  useEffect(() => {
    async function fetchDiseases() {
      try {
        const res = await fetch("/api/add/search_di", {
          method: "GET",
          cache:"force-cache"
        });
        const result = await res.json();
        console.log("data is",result.data);
        if (result.success && Array.isArray(result.data)) {
          setAllDiseases(result.data);
        }
        console.log("disease are", allDiseases);
      } catch (err) {
        console.error("Error fetching diseases:", err);
      }
    }

    fetchDiseases();
  }, []);

  return (
    <section className="bg-white min-h-[65vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 gap-16 md:gap-32 font-sans">
      {/* Left Content: Headline + Subtext + Icon */}
      <div className="max-w-md md:max-w-lg text-gray-900 space-y-6">
        <div className="flex items-center space-x-3 text-[#1D5C48]">
          <HiSearch className="w-10 h-10" aria-hidden="true" />
          <h1 className="text-4xl font-bold font-serif leading-tight">
            Know the Disease. <br />
            Find the Cure.
          </h1>
        </div>
        <p className="text-lg text-gray-700">
          Discover reliable information on thousands of diseases and conditions — empowering your healthcare decisions.
        </p>

        <div className="hidden md:flex space-x-5 text-sm text-green-700 font-semibold">
          <button className="bg-green-100 rounded-full px-4 py-2 hover:bg-green-200 transition" onClick={() => router.push('/Search?disease=Diabetes')}>Diabetes</button>
          <button className="bg-green-100 rounded-full px-4 py-2 hover:bg-green-200 transition" onClick={() => router.push('/Search?disease=Hypertension')}>Hypertension</button>
          <button className="bg-green-100 rounded-full px-4 py-2 hover:bg-green-200 transition" onClick={() => router.push('/Search?disease=Asthma')}>Asthma</button>
          <button className="bg-green-100 rounded-full px-4 py-2 hover:bg-green-200 transition" onClick={() => router.push('/Search?disease=Arthritis')}>Arthritis</button>
        </div>
      </div>

      {/* Right Content: Search Box */}
      <div className="w-full max-w-xl relative">
        {/* Added Search Label above input */}
        <label
          htmlFor="disease"
          className="block font-semibold font-serif mb-4 ml-3 text-gray-900 text-xl"
        >
          Search Diseases & Conditions
        </label>

        <form onSubmit={handleSubmit} className="relative text-gray-900">
          <input
            id="disease"
            name="disease"
            type="search"
            placeholder="Search diseases & conditions..."
            className={`w-full border-2 rounded-full py-4 pl-16 pr-8 text-lg shadow-lg placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-green-400 ${
              !isEmpty ? "border-green-600" : "border-gray-300"
            } transition`}
            value={query}
            onChange={handleSearch}
            autoComplete="off"
            aria-label="Search diseases and conditions"
          />
          <HiSearch
            className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-green-600 pointer-events-none"
            aria-hidden="true"
          />
          {!isEmpty && (
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow transition"
            >
              Search
            </button>
          )}
        </form>

        {/* Suggestion dropdown */}
        {!!filtered.length && (
          <ul className="absolute top-full mt-3 w-11/12 bg-white rounded-lg shadow-lg max-h-60 overflow-auto z-50 border border-green-300">
            {filtered.map((item, idx) => (
              <li key={idx}>
                <button
                  type="button"
                  onClick={handleClick}
                  name={item.disease_name}
                  className="block w-full text-left px-5 py-3 hover:bg-green-100 transition text-gray-700 font-medium"
                >
                  {item.disease_name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Search1;
