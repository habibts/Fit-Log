"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Logo = () => {
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
        <button
            onClick={handleLogoClick}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
            <Image
                src="/images/logo.png"
                alt="FitLog Logo"
                width={40}
                height={40}
            />

            <span className="text-xl font-bold">
                FIT<span className="text-[#C2F800]">LOG</span>
            </span>
        </button>
    );
};

export default Logo;