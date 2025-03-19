import Image from "next/image";
import React from "react";
import Link from "next/link";
import nav from "./nav";
import { deleteSession } from "@/app/lib/session";
import { redirect } from "next/navigation";

async function handleSubmit() {
  "use server"
  await deleteSession();
  redirect('/Login');
}

function Navbar(props) {

  return (
    <div className="flex-row flex bg-green-950 justify-between text-base xl:text-lg p-1 sticky">
      <div className="logo mx-12">
        <Image src="/Assets/images/CarePath Logo.svg" alt="logo" width={200} height={200} />
      </div>
      <ul className="font-semibold flex flex-row justify-center text-yellow-50 space-x-5 text-center lg:space-x-4 my-auto 2xl:mr-[400px] xl:mr-64 mr-40">
        <li>
          <Link href="/" className="inline-block py-1 px-2 relative text-white after:absolute after:left-1 after:bottom-0 after:h-0.5 after:w-0 after:bg-white hover:after:w-11/12 after:transition-all after:duration-300">Home</Link>
        </li>
        <li>
          <Link href="/services" className="inline-block py-1 px-2 relative text-white after:absolute after:left-1.5 after:bottom-0 after:h-0.5 after:w-0 after:bg-white hover:after:w-11/12 after:transition-all after:duration-300">Our Services</Link>
        </li>
        <li>
          <Link href="/Contact" className="inline-block py-1 px-2 relative text-white after:absolute after:left-1.5 after:bottom-0 after:h-0.5 after:w-0 after:bg-white hover:after:w-11/12 after:transition-all after:duration-300">Contact Us</Link>
        </li>
        <li>
          <Link href="/About" className="inline-block py-1 px-2 relative text-white after:absolute after:left-1 after:bottom-0 after:h-0.5 after:w-0 after:bg-white hover:after:w-11/12 after:transition-all after:duration-300">About</Link>
        </li>
      </ul>
      {props.isVerified ? (
        <div className="flex justify-center space-x-5 mx-12 font-semibold">
          <Link href="/Login" className="text-xl hover:underline underline-offset-8 decoration-2 rounded-2xl my-auto transition-all duration-1000">{props.userName}</Link>
          <form action={handleSubmit} className="my-auto">
            <button type="submit" className="rounded-3xl bg-white text-black inline-block my-auto py-1 px-3 hover:bg-black hover:text-white transition-colors duration-200">Log Out</button>
          </form>
        </div>
      ) : (
        <div className="flex justify-center space-x-5 mx-12 font-semibold">
          <Link href="/Login" className="hover:underline underline-offset-8 decoration-2 rounded-2xl my-auto transition-all duration-1000">Log In</Link>
          <Link href="/Signup" className="rounded-3xl bg-white text-black inline-block my-auto py-1 px-3 hover:bg-black hover:text-white transition-colors duration-200">Sign Up</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
