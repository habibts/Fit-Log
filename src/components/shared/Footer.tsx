import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t border-[#2A2A2A] bg-black text-white">
            <div className="container mx-auto px-4 py-8 sm:py-10">
                <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

                    {/* Brand */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
                    >
                        <Image
                            src="/images/logo.png"
                            alt="FitLog Logo"
                            width={40}
                            height={40}
                            className="h-9 w-9"
                        />

                        <span className="text-xl font-bold tracking-wide">
                            FIT<span className="text-[#C2F800]">LOG</span>
                        </span>
                    </Link>

                    {/* Copyright */}
                    <p className="text-center text-sm text-gray-500 md:text-right">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;