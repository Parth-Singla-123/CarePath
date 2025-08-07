'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';
import { usePathname } from 'next/navigation';
import { handleLogout } from '@/app/actions/auth';
import CarePathLogo from '@/public/Assets/images/CarePathLogo';
import Image from 'next/image';

function UserAvatar({ name, photoURL }) {
  if (photoURL) {
    return (
      <Image
        src={photoURL}
        alt={name}
        className="w-12 h-12 rounded-full object-cover border-2 border-[#1D5C48] shadow"
      />
    );
  }
  const letter = (name?.[0] || '?').toUpperCase();
  return (
    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white text-xl font-extrabold border-2 border-black/80 shadow">
      {letter}
    </div>
  );
}

function Navbar({ isVerified, userName, photoURL, userMail }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Profile dropdown logic (desktop)
  const [profileDropdown, setProfileDropdown] = useState(false);
  const profileDropdownTimeout = useRef();
  function showProfileDropdown() {
    clearTimeout(profileDropdownTimeout.current);
    setProfileDropdown(true);
  }
  function delayedHideProfileDropdown() {
    profileDropdownTimeout.current = setTimeout(() => setProfileDropdown(false), 120);
  }

  // Toggle on click or keyboard
  function handleProfileTrigger(e) {
    if (e.type === "click" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setProfileDropdown(d => !d);
      clearTimeout(profileDropdownTimeout.current);
    }
  }

  // Services dropdown logic (desktop)
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const servicesDropdownTimeout = useRef();
  function showServicesDropdown() {
    clearTimeout(servicesDropdownTimeout.current);
    setServicesDropdown(true);
  }
  function delayedHideServicesDropdown() {
    servicesDropdownTimeout.current = setTimeout(() => setServicesDropdown(false), 120);
  }

  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Contact Us', href: '/Contact' },
    { label: 'About', href: '/About' },
  ];

  const services = [
    { label: 'Know about Diseases', href: '/Search' },
    { label: 'Diagnostics', href: '/services/diagnostics' },
    { label: 'Consultation', href: '/Consult' },
    { label: 'Therapy & Wellness', href: '/services/therapy' },
    { label: 'Telemedicine', href: '/services/telemedicine' },
  ];

  // Prevent page scroll when sidebar is open
  React.useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [menuOpen]);

  return (
    <nav className="bg-gray-100 border-b border-gray-200 shadow-sm sticky top-0 z-50 font-lato">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="flex justify-between items-center py-2 md:py-[10px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <CarePathLogo className="h-10 w-auto" white={false}/>
          </Link>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-[18px] text-gray-800 font-semibold items-center tracking-wide">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-1 transition-colors hover:text-[#257A5F] duration-150 ${
                    pathname === href ? 'text-[#1D5C48] font-bold border-b-2 border-[#1D5C48]' : ''
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            {/* Services Desktop Dropdown */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={showServicesDropdown}
              onMouseLeave={delayedHideServicesDropdown}
            >
              <button
                className="flex items-center gap-1 text-gray-800 font-semibold hover:text-[#257A5F] transition"
                aria-haspopup="true"
                tabIndex={0}
              >
                Our Services <span className="select-none">&#9662;</span>
              </button>
              {servicesDropdown && (
                <ul
                  className="absolute mt-2 bg-white text-gray-800 shadow-md rounded-md w-56 z-40 font-normal text-base"
                  onMouseEnter={showServicesDropdown}
                  onMouseLeave={delayedHideServicesDropdown}
                >
                  {services.map(({ label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="block px-4 py-2 hover:bg-gray-100 transition"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-8 text-[18px] font-semibold">
            {isVerified ? (
              <div
                className="relative"
                onMouseEnter={showProfileDropdown}
                onMouseLeave={delayedHideProfileDropdown}
                tabIndex={-1}
                aria-label="User Menu"
                style={{ minWidth: 170 }}
              >
                <button
                  type="button"
                  className="flex items-center gap-4 focus:outline-none text-[#1D5C48] px-1 py-1"
                  onClick={handleProfileTrigger}
                  onKeyDown={e => handleProfileTrigger(e)}
                  aria-haspopup="menu"
                  aria-expanded={profileDropdown}
                  tabIndex={0}
                >
                  <UserAvatar name={userName} photoURL={photoURL} />
                  <div className="flex items-center gap-1">
                    <span className="text-xl font-bold">{userName}</span>
                    <HiChevronDown className="ml-1 text-2xl text-gray-500" />
                  </div>
                </button>

                {profileDropdown && (
                  <ul
                    className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 shadow-md rounded-md text-gray-800 text-base z-50 font-normal p-0"
                    tabIndex={-1}
                    role="menu"
                    onMouseEnter={showProfileDropdown}
                    onMouseLeave={delayedHideProfileDropdown}
                  >
                    {/* USER INFO SECTION */}
                    <li className="px-4 py-3 border-b border-gray-100">
                      <div className="font-bold text-[17px] truncate">{userName}</div>
                      <div className="text-gray-500 text-sm truncate">{userMail}</div>
                    </li>

                    {/* MENU LINKS SECTION */}
                    <li>
                      <Link href="/Profile" className="block px-4 py-2 hover:bg-gray-100" role="menuitem">
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link href="/Appointments" className="block px-4 py-2 hover:bg-gray-100" role="menuitem">
                        Appointments
                      </Link>
                    </li>
                    <li>
                      <Link href="/Messages" className="block px-4 py-2 hover:bg-gray-100" role="menuitem">
                        Messages
                      </Link>
                    </li>

                    {/* SIGN OUT SECTION */}
                    <li className="border-t border-gray-100">
                      <form action={handleLogout}>
                        <button
                          type="submit"
                          className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition"
                          role="menuitem"
                        >
                          Sign Out
                        </button>
                      </form>
                    </li>
                  </ul>
                )}



              </div>
            ) : (
              <>
                <Link
                  href="/Login"
                  className="text-gray-700 hover:text-[#257A5F] transition font-semibold"
                >
                  Login
                </Link>
                <Link
                  href="/Signup"
                  className="px-5 py-2 bg-[#1D5C48] text-white rounded-full hover:bg-[#257A5F] transition font-semibold shadow-sm"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Sidebar Toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-[#1D5C48] text-2xl focus:outline-none"
            aria-label="Open sidebar menu"
          >
            <HiMenu />
          </button>
        </div>

        {/* MOBILE SLIDE-IN SIDEBAR (unchanged) */}
        <div
          className={`
            fixed inset-0 z-[150] transition
            ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}
          `}
        >
          {/* Overlay */}
          <div
            onClick={() => setMenuOpen(false)}
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
              menuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden="true"
          />

          {/* Sidebar */}
          <div
            className={`
              fixed top-0 left-0 h-full w-[85vw] max-w-xs bg-white shadow-2xl transform
              transition-transform duration-300 ease-in-out
              ${menuOpen ? 'translate-x-0' : '-translate-x-full'}
              md:hidden flex flex-col font-serif font-semibold text-gray-800
            `}
            tabIndex={-1}
            aria-label="Mobile menu"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <CarePathLogo className="h-9 w-auto" white={false}/>
              <button
                className="text-[#1D5C48] text-2xl"
                aria-label="Close sidebar menu"
                onClick={() => setMenuOpen(false)}
              >
                <HiX />
              </button>
            </div>

            <ul className="py-4 flex flex-col gap-1 text-base">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block px-6 py-2 hover:bg-gray-100 rounded transition ${
                      pathname === href ? 'text-[#1D5C48] font-bold' : ''
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}

              {/* Services section */}
              <details className="w-full px-6 py-2 group">
                <summary className="font-semibold text-[#1D5C48] cursor-pointer hover:underline select-none">
                  Our Services
                </summary>
                <div className="ml-3 mt-1 flex flex-col">
                  {services.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block text-gray-700 px-3 py-1 rounded hover:bg-gray-100 transition"
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </details>
            </ul>

            {isVerified ? (
              <div className="border-t px-6 py-3 mt-auto">
                <div className="flex items-center gap-2 mb-2 text-[#1D5C48] text-base">
                  <UserAvatar name={userName} photoURL={photoURL} />
                  <div className="px-4 py-3 border-b border-gray-100">
                      <div className="font-bold text-[17px] truncate">{userName}</div>
                      <div className="text-gray-500 text-sm truncate">{userMail}</div>
                  </div>
                </div>
                <Link href="/Profile" className="block py-1 hover:text-[#257A5F]" onClick={() => setMenuOpen(false)}>
                  My Profile
                </Link>
                <Link href="/Appointments" className="block py-1 hover:text-[#257A5F]" onClick={() => setMenuOpen(false)}>
                  Appointments
                </Link>
                <Link href="/Messages" className="block py-1 hover:text-[#257A5F]" onClick={() => setMenuOpen(false)}>
                  Messages
                </Link>
                <form action={handleLogout}>
                  <button
                    type="submit"
                    className="w-full text-left mt-3 text-red-600 hover:underline text-base"
                  >
                    Sign Out
                  </button>
                </form>
              </div>
            ) : (
              <div className="border-t flex flex-col gap-2 px-6 py-3 mt-auto">
                <Link
                  href="/Login"
                  className="text-[#1D5C48] hover:text-[#257A5F] text-base"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/Signup"
                  className="block bg-[#1D5C48] text-white py-2 rounded-full text-center hover:bg-[#257A5F]"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
