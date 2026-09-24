
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="border-t border-[#2A2A2A] bg-black text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
                    >
                        <Image
                            src="/images/logo.png"
                            alt="FitLog Logo"
                            width={40}
                            height={40}
                        />

                        <span className="text-2xl font-bold tracking-wide">
                            FIT<span className="text-[#C2F800]">LOG</span>
                        </span>
                    </Link>

                    {/* Copyright */}
                    <div className="border-t border-[#2A2A2A] pt-5 text-center text-sm text-gray-500 md:border-t-0 md:pt-0">
                        © 2026 FITLOG.{" "}
                        <span className="text-gray-400">
                            Train with intent. Log every set.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

