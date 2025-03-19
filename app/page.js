import React from "react";
import Image from "next/image";
import Link from "next/link";
import Homeimage from "@/components/homeimage";
import Search1 from "@/components/search1";
import Special from "@/components/special";
import Content from "@/components/content1";
import Care from "@/components/care";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cookies } from "next/headers";
import { decrypt } from "./lib/session";

async function page() {
    return (
        <div className="overflow-x-hidden">
            
            <Homeimage />
            <Search1 />
            <Special />
            <Care />
            <Content />
            
        </div>
    )
}

export default page;