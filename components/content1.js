"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHospitalAlt, FaUserMd, FaNotesMedical, FaHeart } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function OneMedicalInspiredContent() {
  const features = [
    {
      icon: <FaHospitalAlt className="text-green-600 w-10 h-10" />,
      title: "Expert Medical Team",
      description:
        "Our team includes board-certified specialists delivering personalized care with compassion.",
    },
    {
      icon: <FaUserMd className="text-green-600 w-10 h-10" />,
      title: "Virtual Consultations",
      description:
        "Access healthcare from your home with our secure, high-quality telemedicine platform.",
    },
    {
      icon: <FaNotesMedical className="text-green-600 w-10 h-10" />,
      title: "Patient Records Management",
      description:
        "Manage your health information securely with easy-to-use patient portals.",
    },
    {
      icon: <FaHeart className="text-green-600 w-10 h-10" />,
      title: "Comprehensive Wellness Programs",
      description:
        "Prevention, diagnosis, and treatment integrated for lifelong healthy living.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-green-100 to-white rounded-[50px] max-w-7xl mx-auto py-16 px-6 sm:px-12 md:px-16 font-serif text-green-900">
      {/* Background subtle shapes */}
      <svg
        aria-hidden="true"
        className="hidden md:block absolute top-[-80px] left-[-40px] w-48 h-48 opacity-20 text-green-300"
        fill="currentColor"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="100" />
      </svg>

      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          variants={itemVariants}
        >
          Healing Starts Here
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl max-w-xl mx-auto mb-12 font-medium text-green-800"
          variants={itemVariants}
        >
          Experience personalized care tailored to you. Trusted expertise, modern technology, and a commitment to your wellness every step of the way.
        </motion.p>

        <motion.div className="flex justify-center gap-6 mb-16" variants={itemVariants}>
          <Link
            href="/About"
            className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition"
          >
            Learn More
          </Link>
          <Link
            href="/BookAppointment"
            className="px-8 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-full hover:bg-green-100 transition"
          >
            Book Appointment
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {features.map(({ icon, title, description }, idx) => (
          <motion.article
            key={idx}
            className="flex flex-col items-center text-center space-y-4 px-4 sm:px-2"
            variants={itemVariants}
          >
            <div className="p-4 bg-green-100 rounded-full">{icon}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-green-700">{description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
