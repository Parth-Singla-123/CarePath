import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-green-950 text-white pt-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-row justify-between">

                    <div className="items-center">
                        {/* Logo / Site Name */}
                        <div className="mb-6 lg:mb-0 mx-10">
                            <p className="mt-2 text-sm text-gray-400">
                                Your one-stop destination for health and wellness.
                            </p>
                        </div>

                        <div className="flex flex-row space-x-10 my-3 mx-10">
                            <div className="flex flex-col space-y-1">
                                <h1 className="font-semibold text-xl mb-1">Services</h1>
                                <Link href="#" className="underline-offset-2 hover:underline">Consultation</Link>
                                <Link href="#" className="underline-offset-2 hover:underline">Prescription</Link>
                                <Link href="#" className="underline-offset-2 hover:underline">Health Records</Link>
                            </div>

                            <div className="flex flex-col space-y-1">
                                <h1 className="font-semibold text-xl mb-1">Contact</h1>
                                <Link href="#" className="underline-offset-2 hover:underline">Home</Link>
                                <Link href="#" className="underline-offset-2 hover:underline">About</Link>
                                <Link href="#" className="underline-offset-2 hover:underline">Contact Us</Link>
                            </div>
                        </div>
                    </div>

                    <div className="mx-10 my-auto">
                        <h1 className="mt-5 mb-3 text-lg font-medium mx-1"> Follow CarePath On</h1>
                        <div className="flex space-x-6">
                            <a href="https://instagram.com" aria-label="Instagram">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.042.24 2.512.414.626.232 1.076.51 1.549.982s.751.923.982 1.549c.174.47.358 1.306.414 2.512.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.24 2.042-.414 2.512-.232.626-.51 1.076-.982 1.549s-.923.751-1.549.982c-.47.174-1.306.358-2.512.414-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-2.042-.24-2.512-.414-.626-.232-1.076-.51-1.549-.982s-.751-.923-.982-1.549c-.174-.47-.358-1.306-.414-2.512-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.206.24-2.042.414-2.512.232-.626.51-1.076.982-1.549s.923-.751 1.549-.982c.47-.174 1.306-.358 2.512-.414 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.242.057-2.092.25-2.816.532-.766.297-1.419.69-2.072 1.343-.653.653-1.046 1.306-1.343 2.072-.283.724-.475 1.574-.532 2.816-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.242.25 2.092.532 2.816.297.766.69 1.419 1.343 2.072.653.653 1.306 1.046 2.072 1.343.724.283 1.574.475 2.816.532 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.242-.057 2.092-.25 2.816-.532.766-.297 1.419-.69 2.072-1.343.653-.653 1.046-1.306 1.343-2.072.283-.724.475-1.574.532-2.816.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.242-.25-2.092-.532-2.816-.297-.766-.69-1.419-1.343-2.072-.653-.653-1.306-1.046-2.072-1.343-.724-.283-1.574-.475-2.816-.532-1.28-.058-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                                </svg>
                            </a>
                            <a href="https://facebook.com" aria-label="Facebook">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    <path d="M22.675 0h-21.35c-.729 0-1.325.596-1.325 1.325v21.351c0 .729.596 1.324 1.325 1.324h11.495v-9.294h-3.122v-3.622h3.122v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.917.001c-1.504 0-1.794.715-1.794 1.762v2.314h3.587l-.467 3.622h-3.12v9.293h6.118c.729 0 1.325-.595 1.325-1.324v-21.35c0-.729-.596-1.325-1.325-1.325z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com" aria-label="Twitter">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    <path d="M24 4.557c-.883.392-1.83.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.719 0-4.92 2.201-4.92 4.917 0 .386.045.762.127 1.124-4.09-.205-7.719-2.165-10.148-5.144-.424.724-.666 1.562-.666 2.457 0 1.696.863 3.191 2.173 4.066-.801-.025-1.555-.245-2.214-.612v.062c0 2.37 1.685 4.348 3.918 4.798-.411.111-.843.171-1.287.171-.316 0-.624-.03-.924-.087.625 1.951 2.444 3.376 4.6 3.416-1.68 1.318-3.809 2.104-6.115 2.104-.398 0-.79-.023-1.177-.068 2.179 1.396 4.768 2.21 7.548 2.21 9.057 0 14.01-7.506 14.01-14.01 0-.213-.005-.425-.014-.636.962-.695 1.8-1.562 2.46-2.549z" />
                                </svg>
                            </a>
                            <a href="https://youtube.com" aria-label="YouTube">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    <path d="M19.615 3.184c-2.64-.182-8.591-.182-11.231 0-2.641.182-4.384 1.758-4.615 4.358-.268 2.86-.268 5.858 0 8.718.231 2.6 1.974 4.176 4.615 4.358 2.64.182 8.591.182 11.231 0 2.641-.182 4.384-1.758 4.615-4.358.268-2.86.268-5.858 0-8.718-.231-2.6-1.974-4.176-4.615-4.358zm-10.615 12.626v-7.62l6.461 3.809-6.461 3.811z" />
                                </svg>
                            </a>
                            <a href="https://linkedin.com" aria-label="LinkedIn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    <path d="M19.995 3h-16.005c-.552 0-1 .448-1 1v16c0 .552.448 1 1 1h16.005c.552 0 1-.448 1-1v-16c0-.552-.448-1-1-1zm-11.649 16.75h-2.762v-9.5h2.762v9.5zm-1.376-10.841c-.863 0-1.563-.7-1.563-1.563 0-.864.7-1.563 1.563-1.563.863 0 1.563.699 1.563 1.563 0 .863-.7 1.563-1.563 1.563zm10.775 10.841h-2.762v-4.794c0-2.393-2.875-2.208-2.875 0v4.794h-2.762v-9.5h2.762v1.303c1.281-2.374 5.637-2.561 5.637 2.278v5.919z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-6 border-t border-gray-700 pt-4 text-sm text-gray-400 flex flex-row justify-between pb-4">
                    <div className="logo mx-10 my-auto">
                        <Image src="/Assets/images/CarePath Logo.svg" alt="logo" width={200} height={200} />
                    </div>
                    <p className="my-auto mx-10">&copy; 2024 Healthcare Website. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
