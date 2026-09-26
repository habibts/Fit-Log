import React from 'react';
import WorkoutCard from '@/components/features/home/WorkoutCard';
import { IWorkout } from '@/types/workout.types';
import { Oswald } from "next/font/google";

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["700"],
});

const getLibraryData = async (): Promise<IWorkout[]> => {

    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    return res.json();

}


const Library = async () => {

    const workouts = await getLibraryData()
    return (
        <section id="library">
            <div className="mx-auto w-[calc(100%-2rem)] max-w-7xl py-12 sm:w-[calc(100%-3rem)] sm:py-14 md:py-16 lg:w-[calc(100%-4rem)] lg:py-20">
                <h2 className={`${oswald.className} text-3xl font-bold text-white sm:text-4xl`}>
                    THE LIBRARY
                </h2>

                <p className="mt-2 text-sm text-[#C2F800] sm:text-base">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>
            <div className="container mx-auto grid gap-6 px-4 pb-20 md:grid-cols-2 lg:grid-cols-3">
                {
                    workouts.map((workout) => {
                        return <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>
                    })
                }
            </div>
        </section>
    );
};

export default Library;