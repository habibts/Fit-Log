"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import usePlan from "@/hooks/usePlan";

const Navbar = () => {
    const pathname = usePathname();

    const {
        plan,
        saved,
        setActiveTab,
    } = usePlan();

    const handlePlanClick = () => {
        setActiveTab("plan");
    };

    const handleSavedClick = () => {
        setActiveTab("saved");
    };

    const links = (
        <>
            <li>
                <Link
                    href="/"
                    className={`flex h-10 w-24 items-center justify-center rounded-full transition-all duration-200 ${
                        pathname === "/"
                            ? "bg-[#C2F800] font-semibold text-black"
                            : "text-[#9CA3AF] hover:bg-[#C2F800]/10 hover:text-[#C2F800]"
                    }`}
                >
                    Workouts
                </Link>
            </li>

            <li>
                <Link
                    href="/my-plan"
                    onClick={handlePlanClick}
                    className={`flex h-10 w-24 items-center justify-center rounded-full transition-all duration-200 ${
                        pathname === "/my-plan"
                            ? "bg-[#C2F800] font-semibold text-black"
                            : "text-[#9CA3AF] hover:bg-[#C2F800]/10 hover:text-[#C2F800]"
                    }`}
                >
                    My Plan
                </Link>
            </li>
        </>
    );

    return (
        <header className="sticky top-0 z-50 border-b border-[#2A2A2A] bg-black">
            <div className="navbar container mx-auto px-2 text-white sm:px-4">

                {/* Left Side */}
                <div className="navbar-start min-w-0">

                    {/* Mobile Menu */}
                    <div className="dropdown lg:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost px-1.5 text-white hover:bg-[#C2F800] hover:text-black sm:px-2"
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
                            className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-box border border-[#2A2A2A] bg-[#151922] p-2 shadow-xl"
                        >
                            {links}
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex shrink-0 items-center gap-1 transition-opacity duration-200 hover:opacity-80 sm:gap-1.5 lg:gap-2"
                    >
                        <Image
                            src="/images/logo.png"
                            alt="FitLog Logo"
                            width={32}
                            height={32}
                            className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
                        />

                        <span className="text-sm font-bold tracking-wide sm:text-base lg:text-xl">
                            FIT<span className="text-[#C2F800]">LOG</span>
                        </span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal items-center gap-1 px-1">
                        {links}
                    </ul>
                </div>

                {/* Right Side */}
                <div className="navbar-end min-w-0 gap-1 sm:gap-1.5 lg:gap-3">

                    {/* Plan Badge */}
                    <Link
                        href="/my-plan"
                        onClick={handlePlanClick}
                        className="flex shrink-0 items-center gap-1 rounded-full bg-[#C2F800] px-2 py-1.5 text-[11px] font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b8ed00] sm:gap-1.5 sm:px-2.5 sm:text-xs lg:gap-2 lg:px-4 lg:py-2 lg:text-sm"
                    >
                        <span>Plan</span>

                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-bold text-[#C2F800]">
                            {plan.length}
                        </span>
                    </Link>

                    {/* Saved Badge */}
                    <Link
                        href="/my-plan"
                        onClick={handleSavedClick}
                        className="flex shrink-0 items-center gap-1 rounded-full border border-[#C2F800] px-2 py-1.5 text-[11px] font-semibold text-[#C2F800] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C2F800]/10 sm:gap-1.5 sm:px-2.5 sm:text-xs lg:gap-2 lg:px-4 lg:py-2 lg:text-sm"
                    >
                        <span>Saved</span>

                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C2F800] px-1 text-[10px] font-bold text-black">
                            {saved.length}
                        </span>
                    </Link>

                </div>
            </div>
        </header>
    );
};

export default Navbar;