import Image from "next/image";
import React from "react";
import Link from "next/link";
import { deleteSession } from "@/app/lib/session";
import { redirect } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

async function handleSubmit() {
  "use server"
  await deleteSession();
  redirect('/Login');
}

function Navbar(props) {
  return (
    <nav className="bg-green-950 text-white font-semibold sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center py-2.5">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/Assets/images/CarePath Logo.svg" alt="logo" width={160} height={160} />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4 lg:space-x-6 text-sm lg:text-base xl:text-lg">

            <li>
              <Link href="/" className="inline-block py-1 px-2 relative after:absolute after:left-1 after:bottom-0 after:h-0.5 after:w-0 after:bg-white hover:after:w-11/12 after:transition-all after:duration-300">Home</Link>
            </li>


            <li className="relative group hidden md:block">
              <button className="flex items-center gap-1 py-1 px-2 hover:text-green-200">
                Our Services
                <span className="ml-1">&#9662;</span>
              </button>

              <ul className="absolute hidden group-hover:block bg-white text-green-800 text-sm mt-2 rounded-md shadow-lg w-48 z-50">
                
                <li>
                  <Link href="/Search" className="block px-4 py-3 hover:bg-green-600 hover:text-white">Know about Diseases</Link>
                </li>
                {/* <li>
                  <Link href="/services/consultation" className="block px-4 py-3 hover:bg-green-600 hover:text-white">Consultation</Link>
                </li>
                <li>
                  <Link href="/services/therapy" className="block px-4 py-3 hover:bg-green-600 hover:text-white">Therapy & Wellness</Link>
                </li>
                <li>
                  <Link href="/services/telemedicine" className="block px-4 py-3 hover:bg-green-600 hover:text-white">Telemedicine</Link>
                </li> */}

              </ul>
            </li>



            <li>
              <Link href="/Contact" className="inline-block py-1 px-2 relative after:absolute after:left-1.5 after:bottom-0 after:h-0.5 after:w-0 after:bg-white hover:after:w-11/12 after:transition-all after:duration-300">Contact Us</Link>
            </li>

            <li>
              <Link href="/About" className="inline-block py-1 px-2 relative after:absolute after:left-1 after:bottom-0 after:h-0.5 after:w-0 after:bg-white hover:after:w-11/12 after:transition-all after:duration-300">About</Link>
            </li>
          </ul>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-4">
            {props.isVerified ? (
              <>
                <Link href="/Login" className="hover:underline underline-offset-8 decoration-2 transition-all duration-1000">{props.userName}</Link>
                <form action={handleSubmit}>
                  <button type="submit" className="rounded-3xl bg-white text-black py-1 px-3 hover:bg-black hover:text-white transition-colors duration-200">Log Out</button>
                </form>
              </>
            ) : (
              <>
                <Link href="/Login" className="hover:underline underline-offset-8 decoration-2 transition-all duration-1000">Log In</Link>
                <Link href="/Signup" className="rounded-3xl bg-white text-black py-1 px-3 hover:bg-black hover:text-white transition-colors duration-200">Sign Up</Link>
              </>
            )}
          </div>

          {/* Mobile Menu - Slide Down CSS Only */}
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          <label htmlFor="menu-toggle" className="md:hidden cursor-pointer">
            <HiMenu className="text-3xl" />
          </label>
        </div>

        {/* Mobile Slide-In Menu */}
        <div className="peer-checked:flex hidden flex-col items-center bg-green-900 text-white py-4 space-y-4 md:hidden">
          <Link href="/" className="hover:underline">Home</Link>

          <details className="w-full px-4 text-center">
            <summary className="cursor-pointer hover:underline py-1">Our Services</summary>
            <div className="mt-2 space-y-1 text-sm">
              <Link href="/services/diagnostics" className="block hover:underline">Diagnostics</Link>
              <Link href="/services/consultation" className="block hover:underline">Consultation</Link>
              <Link href="/services/therapy" className="block hover:underline">Therapy & Wellness</Link>
              <Link href="/services/telemedicine" className="block hover:underline">Telemedicine</Link>
            </div>
          </details>
          
          <Link href="/Contact" className="hover:underline">Contact Us</Link>
          <Link href="/About" className="hover:underline">About</Link>
          {props.isVerified ? (
            <>
              <Link href="/Login" className="hover:underline">{props.userName}</Link>
              <form action={handleSubmit}>
                <button type="submit" className="rounded-3xl bg-white text-black py-1 px-3 hover:bg-black hover:text-white transition-colors duration-200">Log Out</button>
              </form>
            </>
          ) : (
            <>
              <Link href="/Login" className="hover:underline">Log In</Link>
              <Link href="/Signup" className="rounded-3xl bg-white text-black py-1 px-3 hover:bg-black hover:text-white transition-colors duration-200">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
