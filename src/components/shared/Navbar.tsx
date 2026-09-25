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
        activeTab,
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
                    className={`flex h-10 w-24 items-center justify-center rounded-full transition-all duration-200 ${pathname === "/"
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
                    className={`flex h-10 w-24 items-center justify-center rounded-full transition-all duration-200 ${pathname === "/my-plan"
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
            <div className="navbar container mx-auto text-white">

                {/* Logo + Mobile Menu */}
                <div className="navbar-start">

                    {/* Mobile Menu */}
                    <div className="dropdown lg:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost text-white hover:bg-[#C2F800] hover:text-black"
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
                        className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
                    >
                        <Image
                            src="/images/logo.png"
                            alt="FitLog Logo"
                            width={40}
                            height={40}
                        />

                        <span className="text-xl font-bold tracking-wide">
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
                {/* Right Side */}
                <div className="navbar-end gap-2 sm:gap-3">

                    {/* Plan Badge */}
                    <Link
                        href="/my-plan"
                        onClick={handlePlanClick}
                        className="flex items-center gap-2 rounded-full border border-[#C2F800] px-3 py-2 text-xs font-semibold text-[#C2F800] transition-all duration-200 hover:bg-[#C2F800]/10 sm:px-4 sm:text-sm"
                    >
                        <span>Plan</span>

                        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#C2F800] px-1.5 text-xs font-bold text-black">
                            {plan.length}
                        </span>
                    </Link>

                    {/* Saved Badge */}
                    <Link
                        href="/my-plan"
                        onClick={handleSavedClick}
                        className="flex items-center gap-2 rounded-full border border-[#C2F800] px-3 py-2 text-xs font-semibold text-[#C2F800] transition-all duration-200 hover:bg-[#C2F800]/10 sm:px-4 sm:text-sm"
                    >
                        <span>Saved</span>

                        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#C2F800] px-1.5 text-xs font-bold text-black">
                            {saved.length}
                        </span>
                    </Link>

                </div>
            </div>
        </header>
    );
};

export default Navbar;