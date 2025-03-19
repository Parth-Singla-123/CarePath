"use client"

import React,{useEffect,useState} from "react";
import { useSearchParams } from "next/navigation";
import Disease from "@/components/disease";
import Search2 from "@/components/search2";
import { Suspense } from 'react'



function Content() {
    const [data,setInfoData] = useState({});
    const searchParams = useSearchParams();
    const disease_name = searchParams.get('disease');
    console.log(disease_name);
    useEffect(() => {
        async function fetchDisease() {
            try{
                const response = await fetch(`/api/add/getInfo`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ disease_name }),
                });
    
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                const info = result.data[0];
                setInfoData(info);
                console.log(info);
            } catch (error) {
                console.log("Error fetching disease info:", error);
            }
        }
        if (disease_name) {
            fetchDisease();
        }
    }, [disease_name]);
    

    return (
        <div>
            <Disease type={data.type} cure={data.cure} symptoms={data.symptoms} prevention={data.prevention} medicines={data.common_medicines} name={data.disease_name}/>
        </div>
    )
}

function Search() {
    return (
        <div>
            <Search2 />
            <Suspense>
                <Content />
            </Suspense>
        </div>
    )
}
export default Search;