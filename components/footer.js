import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white pt-10 pb-6 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10 md:flex-row md:justify-between md:items-start">
        {/* Left Info Section */}
        <div className="flex flex-col gap-6">
          <p className="text-sm text-gray-400 max-w-xs">
            Your one-stop destination for health and wellness.
          </p>

          <div className="flex flex-row gap-8 text-sm">
            <div className="flex flex-col space-y-2">
              <h1 className="font-semibold text-lg">Services</h1>
              <Link href="#" className="hover:underline">Consultation</Link>
              <Link href="#" className="hover:underline">Prescription</Link>
              <Link href="#" className="hover:underline">Health Records</Link>
            </div>

            <div className="flex flex-col space-y-2">
              <h1 className="font-semibold text-lg">Contact</h1>
              <Link href="#" className="hover:underline">Home</Link>
              <Link href="#" className="hover:underline">About</Link>
              <Link href="#" className="hover:underline">Contact Us</Link>
            </div>
          </div>
        </div>

        {/* Right Social Section */}
        <div className="flex flex-col gap-4 md:mx-5">
          <h1 className="text-lg font-medium">Follow CarePath On</h1>
          <div className="flex gap-4">
            <Link href="https://instagram.com" aria-label="Instagram">
              <svg className="w-6 h-6 fill-current text-gray-400 hover:text-white" viewBox="0 0 24 24"><path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5c3.176 0 5.75-2.574 5.75-5.75v-8.5C22 4.574 19.426 2 16.25 2h-8.5zM4.5 7.75A3.25 3.25 0 0 1 7.75 4.5h8.5a3.25 3.25 0 0 1 3.25 3.25v8.5a3.25 3.25 0 0 1-3.25 3.25h-8.5a3.25 3.25 0 0 1-3.25-3.25v-8.5zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm4.88-.62a.88.88 0 1 0 0 1.76.88.88 0 0 0 0-1.76z"/></svg>
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook">
              <svg className="w-6 h-6 fill-current text-gray-400 hover:text-white" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 16.991 22 12z"/></svg>
            </Link>
            <Link href="https://twitter.com" aria-label="Twitter">
              <svg className="w-6 h-6 fill-current text-gray-400 hover:text-white" viewBox="0 0 24 24"><path d="M22.162 5.656c-.793.352-1.644.59-2.538.696a4.444 4.444 0 0 0 1.947-2.45 8.863 8.863 0 0 1-2.815 1.075A4.427 4.427 0 0 0 16.076 4c-2.457 0-4.45 1.993-4.45 4.451 0 .349.039.69.115 1.018-3.698-.186-6.979-1.958-9.172-4.654a4.437 4.437 0 0 0-.602 2.24 4.45 4.45 0 0 0 1.98 3.709 4.424 4.424 0 0 1-2.015-.557v.057a4.452 4.452 0 0 0 3.568 4.364 4.45 4.45 0 0 1-2.009.077 4.455 4.455 0 0 0 4.156 3.09A8.903 8.903 0 0 1 2 19.544 12.548 12.548 0 0 0 8.29 21.5c7.547 0 11.675-6.252 11.675-11.675 0-.177-.004-.353-.012-.529A8.354 8.354 0 0 0 22.162 5.656z"/></svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <Image src="/Assets/images/CarePath Logo.svg" alt="logo" width={140} height={140} />
        <p className="mt-4 md:mt-0">&copy; 2024 Healthcare Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
