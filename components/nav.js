import React from "react";
import Navbar from "./navbar";
import { userVerification } from "@/app/lib/session";

export default async function nav() {
    const userDetails = userVerification();
    return (
        <div>
            <Navbar isVerified={(await userDetails).verification} userName={(await userDetails).user}/>
        </div>
    )
}