"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogoClick = () => {
        if (pathname === "/") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            router.push("/");
        }
    };

    return (
        <footer className="border-t border-[#2A2A2A] bg-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:px-6 sm:py-7 md:flex-row md:gap-6 md:px-8 lg:px-10 xl:px-12">
                {/* Logo */}
                <button
                    onClick={handleLogoClick}
                    className="group flex shrink-0 items-center gap-2 transition-opacity duration-200 hover:opacity-80"
                >
                    <Image
                        src="/images/logo.png"
                        alt="FitLog Logo"
                        width={40}
                        height={40}
                        className="h-9 w-9 transition-transform duration-200 group-hover:scale-105 sm:h-10 sm:w-10"
                    />

                    <span className="text-lg font-bold tracking-tight sm:text-xl">
                        FIT<span className="text-[#C2F800]">LOG</span>
                    </span>
                </button>

                {/* Copyright */}
                <p className="max-w-full text-center text-xs leading-relaxed text-gray-500 sm:text-sm md:max-w-md md:text-right lg:max-w-none">
                    © 2026 FitLog — Workout Library.
                    <span className="block sm:inline sm:ml-1">
                        Train hard, log honest.
                    </span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;