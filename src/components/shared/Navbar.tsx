import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    const links = (
        <>
            <li>
                <Link href="/workouts" className="flex items-center justify-center w-24 h-10 text-[#9CA3AF] hover:text-[#C2F800] hover:bg-[#C2F800]/10 rounded-full transition-all duration-200">Workouts</Link>
            </li>
            <li>
                <Link href="/my-plan" className="flex items-center justify-center w-24 h-10 text-[#9CA3AF] hover:text-[#C2F800] hover:bg-[#C2F800]/10 rounded-full transition-all duration-200">My Plan</Link>
            </li>
        </>
    );

    return (
        <div className="bg-black border border-2">
            <div className="navbar shadow-sm container mx-auto text-white">
                {/* Logo + Mobile Menu */}
                <div className="navbar-start">
                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost text-white hover:bg-[#C2F800] hover:text-black lg:hidden"
                        >
                            <svg
                                aria-label="Menu"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/logo.png"
                            alt="FitLog Logo"
                            width={40}
                            height={40}
                        />

                        <span className="text-xl font-bold">
                            FITLOG
                        </span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                {/* Right Side */}
                <div className="navbar-end gap-3">
                    {/* Plan Badge */}
                    <Link
                        href="/my-plan"
                        className="rounded-full bg-[#C2F800] px-4 py-2 text-sm font-semibold text-black transition-all duration-200 hover:bg-[#b8ed00]"
                    >
                        Plan <span className="ml-1">0</span>
                    </Link>

                    {/* Saved Badge */}
                    <Link
                        href="/my-plan"
                        className="rounded-full border border-[#C2F800] px-4 py-2 text-sm font-semibold text-[#C2F800] transition-all duration-200 hover:bg-[#C2F800] hover:text-black"
                    >
                        Saved <span className="ml-1">0</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;