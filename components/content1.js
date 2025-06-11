"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function Content() {
  return (
    <div className="font-serif py-10 rounded-[50px] bg-gradient-to-br from-green-50 via-green-100 to-green-50 mb-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 px-4 sm:px-6 md:px-10 lg:px-16 py-10"
      >
        <div className="text-black flex flex-col lg:w-1/2 w-full space-y-6 px-2 sm:px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-green-900 lg:text-left">Healing Starts Here</h1>
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-green-800 lg:text-left flex items-center gap-2">
              <span>🩺</span> The right answers the first time
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700 lg:text-left">Effective treatment depends on getting the right diagnosis. Our experts diagnose and treat the toughest medical challenges.</p>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-green-800 lg:text-left flex items-center gap-2">
              <span>🏆</span> One of the Top-ranked
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700 lg:text-left">CarePath has more No. 1 rankings than any other hospital in the nation according to India News & Times.</p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Link href="/About" className="text-sm sm:text-base md:text-lg rounded-full py-2 px-6 text-green-800 border-green-800 border-2 hover:bg-green-200 transition-all w-fit">
              Learn more
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-2/5 w-5/6 max-w-sm md:max-w-md"
        >
          <Image
            src="/Assets/images/istockphoto-1263873023-612x612.jpg"
            alt="doctor"
            width={400}
            height={400}
            className="rounded-3xl shadow-xl shadow-green-900 w-full h-auto object-cover"
          />
        </motion.div>
      </motion.div>

      <div className="h-[1px] bg-green-800/20 my-10 w-4/5 mx-auto"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-12 px-4 sm:px-6 md:px-10 lg:px-16 py-10"
      >
        <div className="text-black flex flex-col lg:w-1/2 w-full space-y-6 px-2 sm:px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-green-900 lg:text-left">World-class care for global patients</h1>
          <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700 lg:text-left">We make it easy for patients around the world to get care from CarePath.</p>
          <div className="flex justify-center lg:justify-start">
            <Link href="#" className="text-sm sm:text-base md:text-lg rounded-full py-2 px-6 text-green-900 border-green-900 border-2 hover:bg-green-200 transition-all w-fit">
              Book Appointment Now
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-2/5 w-5/6 max-w-sm md:max-w-md"
        >
          <Image
            src="/Assets/images/nursecare.jpg"
            alt="nurse care"
            width={400}
            height={400}
            className="rounded-3xl shadow-xl shadow-green-900 w-full h-auto object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Content;
