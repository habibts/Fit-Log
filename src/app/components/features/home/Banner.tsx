import Image from "next/image";
import React from "react";

const Banner = () => {
    return (
        <section className="container mx-auto mt-10 flex flex-col items-center justify-between gap-10 rounded-2xl bg-[#222630] px-6 py-12 md:px-10 md:py-16 lg:flex-row lg:px-16 lg:py-20">
            {/* Left Content */}
            <div className="max-w-xl">
                <h4 className="mb-4 text-sm font-semibold tracking-[3px] text-[#C2F800]">
                    WORKOUT LIBRARY
                </h4>

                <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                    TRAIN WITH INTENT. LOG
                    EVERY SET.
                </h1>

                <p className="mt-6 max-w-lg text-gray-400">
                    FitLog is a dark, no-nonsense gym companion: pick a lift,
                    lock it into today&apos;s plan, and watch the week&apos;s
                    work add up.
                </p>

                <button className="mt-8 rounded-full bg-[#C2F800] px-6 py-3 font-bold text-black transition-all duration-200 hover:scale-105 hover:bg-white">
                    BROWSE WORKOUTS
                </button>
            </div>

            {/* Right Image */}
            <div className="transition-transform duration-500 hover:scale-105">
                <Image
                    src="/images/banner.png"
                    alt="FitLog workout"
                    width={600}
                    height={500}
                    priority
                />
            </div>
        </section>
    );
};

export default Banner;