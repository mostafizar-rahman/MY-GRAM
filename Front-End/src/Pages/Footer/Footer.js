import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <footer aria-label="Site Footer" className="bg-gray-800 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8" >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <NavLink to="/" className='font-bold text-5xl text-gray-50' style={{ fontFamily: 'Gwendolyn' }}>mygram</NavLink>
                        <p className="max-w-xs mt-4 text-gray-100"> mygram is a social media site where you can share your best moments captured on your mobile or camera, You can write the stories in your mind.</p>

                        <ul className="flex gap-6 mt-8">
                            <li>
                                <Link to="/" target="_blank" className="text-gray-50 transition hover:text-red-700" >
                                    <FaFacebookF/>
                                </Link>
                            </li>

                            <li>
                                <Link to="/" target="_blank" className="text-gray-50 transition hover:text-red-700">
                                   <FaTwitter/>
                                </Link>
                            </li>

                            <li>
                                <Link to="/" target="_blank" className="text-gray-50 transition hover:text-red-700"
                                >
                                    <FaGithub/>
                                </Link>
                            </li>

                            <li>
                                <Link to="/" target="_blank" className="text-gray-50 transition hover:text-red-700"
                                >
                                    <FaLinkedinIn/>
                                </Link>
                            </li>

                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3" >
                  
                        <div>
                            <p className="font-medium text-gray-50">Company</p>

                            <nav aria-label="Footer Navigation - Company" className="mt-6">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <Link to="#" className="text-gray-50 transition hover:text-red-700">
                                            About
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="#" className="text-gray-50 transition hover:text-red-700">
                                            Meet the Team
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="#" className="text-gray-50 transition hover:text-red-700">
                                            Accounts Review
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div>
                            <p className="font-medium text-gray-50">Helpful Links</p>

                            <nav aria-label="Footer Navigation - Company" className="mt-6">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <Link to="#" className="text-gray-50 transition hover:text-red-700">
                                            Contact
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="#" className="text-gray-50 transition hover:text-red-700">
                                            FAQs
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="#" className="text-gray-50 transition hover:text-red-700">
                                            Live Chat
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div>
                            <p className="font-medium text-gray-50">Legal</p>

                            <nav aria-label="Footer Navigation - Legal" className="mt-6">
                                <ul className="space-y-4 text-sm">
                                    <li>
                                        <Link to="#" className="text-gray-50 transition hover:text-red-700">
                                            Accessibility
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="#" className="text-gray-50 transition hover:text-red-700">
                                            Returns Policy
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="#" className="text-gray-50 transition hover:text-red-700">
                                            Refund Policy
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="#" className="text-gray-50 transition hover:text-red-700">
                                            Hiring Statistics
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <p className="text-xs text-gray-50">
                    &copy; 2022. Mostafizar. All rights reserved.
                </p>
            </div>
        </footer>

    )
}

export default Footer