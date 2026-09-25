import Image from "next/image";
import React from "react";

const Banner = () => {
    return (
        <section className="mx-auto mt-6 w-[calc(100%-2rem)] max-w-7xl rounded-2xl bg-[#222630] px-5 py-10 sm:mt-8 sm:w-[calc(100%-3rem)] sm:px-8 sm:py-12 md:px-10 md:py-16 lg:mt-10 lg:w-[calc(100%-4rem)] lg:px-16 lg:py-20">
            <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

                {/* Left Content */}
                <div className="w-full max-w-xl text-center lg:text-left">
                    <h4 className="mb-4 text-sm font-semibold tracking-[3px] text-[#C2F800]">
                        WORKOUT LIBRARY
                    </h4>

                    <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>

                    <p className="mx-auto mt-6 max-w-lg text-sm leading-6 text-gray-400 sm:text-base lg:mx-0">
                        FitLog is a dark, no-nonsense gym companion: pick a
                        lift, lock it into today&apos;s plan, and watch the
                        week&apos;s work add up.
                    </p>

                    <button className="mt-8 rounded-full bg-[#C2F800] px-6 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                        BROWSE WORKOUTS
                    </button>
                </div>

                {/* Right Image */}
                <div className="w-full max-w-lg transition-transform duration-500 hover:scale-105">
                    <Image
                        src="/images/banner.png"
                        alt="FitLog workout"
                        width={600}
                        height={500}
                        priority
                        className="h-auto w-full object-contain"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;