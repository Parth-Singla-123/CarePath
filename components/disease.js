import React from "react";
import { FaCircle } from "react-icons/fa";

function Disease(props) {
    const isEmpty = props.cure==undefined;
    console.log(props);
    return (
        <div className="bg-gray-50 text-gray-700 py-2">
            {!isEmpty ? (<div className="max-w-4xl mx-auto px-14 py-14 my-12 bg-white shadow-md rounded-lg space-y-8">
                <div>
                    <h1 className="text-3xl font-semibold mb-2">{props.name}</h1>
                </div>

                <div className="border-t border-gray-300 pt-6">
                    <div className="flex text-xl font-normal">
                        <p>{props.type} Disease</p>
                    </div>
                </div>

                
                <div className="border-t border-gray-300 pt-6">
                    <h1 className="text-2xl font-semibold mb-2">Symptoms</h1>
                    <div className="flex flex-row text-lg -ml-4">
                        <FaCircle className="w-2 mr-2.5 mt-2" />
                        <p>{props.symptoms}</p>
                    </div>
                </div>

                
                <div className="border-t border-gray-300 pt-6">
                    <h1 className="text-2xl font-semibold mb-2">Prevention</h1>
                    <div className="flex text-lg -ml-4">
                        <FaCircle className="w-2 h-2 mr-2.5 mt-2"/>
                        <p>{props.prevention}</p>
                    </div>
                </div>

                
                <div className="border-t border-gray-300 pt-6">
                    <h1 className="text-2xl font-semibold mb-2">Cure</h1>
                    <div className="flex text-lg -ml-4">
                        <FaCircle className="w-2 mr-2.5 mt-2"/>
                        <p>{props.cure}</p>
                    </div>
                </div>

                
                <div className="border-t border-gray-300 pt-6">
                    <h1 className="text-2xl font-semibold mb-2">Common Medicines</h1>
                    <div className="flex text-lg -ml-4">
                        <FaCircle className="w-2 mr-2.5 mt-2"/>
                        <p>{props.medicines}</p>
                    </div>
                </div>
                
            </div>) : (<h1 className="ml-10 text-lg font-medium h-[300px] mt-4">Nothing to display about diseases</h1>)}

        </div>
    )
}

export default Disease;