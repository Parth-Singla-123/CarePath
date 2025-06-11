"use client"

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="bg-green-50 text-green-900 min-h-screen py-12 px-4 sm:px-8 lg:px-32">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8 text-green-950"
      >
        Get in Touch With CarePath
      </motion.h1>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.7 }}
          className="bg-white shadow-xl rounded-2xl p-8"
        >
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700" />
            <textarea placeholder="Your Message" rows="5" className="w-full px-4 py-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700" />
            <button type="submit" className="bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-950 transition-colors duration-300">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.7 }}
          className="text-lg space-y-6"
        >
          <div className="flex items-start space-x-4">
            <FaMapMarkerAlt className="text-green-700 mt-1" />
            <p>CarePath HQ, 3rd Floor, HealthTech Park, Sector 62, Noida, Uttar Pradesh, India</p>
          </div>

          <div className="flex items-start space-x-4">
            <FaPhoneAlt className="text-green-700 mt-1" />
            <div>
              <p>+91 98765 43210</p>
              <p>+91 91234 56789</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <FaEnvelope className="text-green-700 mt-1" />
            <p>support@carepath.in</p>
          </div>

          <div className="pt-6">
            <h3 className="font-semibold mb-2">Follow us on</h3>
            <div className="flex space-x-4 text-green-800 text-xl">
              <a href="#" className="hover:text-green-950 transition-colors duration-200"><FaInstagram /></a>
              <a href="#" className="hover:text-green-950 transition-colors duration-200"><FaFacebook /></a>
              <a href="#" className="hover:text-green-950 transition-colors duration-200"><FaLinkedin /></a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-16"
      >
        <h2 className="text-2xl font-semibold mb-2">Need immediate support?</h2>
        <p className="text-green-800 font-medium">Call our 24x7 helpline: <span className="text-green-950 font-bold">1800-123-4567</span></p>
      </motion.div>
    </div>
  );
}
