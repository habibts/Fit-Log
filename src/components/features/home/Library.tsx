import React from 'react';
import WorkoutCard from '@/components/features/home/WorkoutCard';
import { IWorkout } from '@/types/workout.types';

const getLibraryData = async ():Promise<IWorkout[]> => {

    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    return res.json();

}


const Library = async () => {

    const workouts = await getLibraryData()
    return (
        <section>
            <div className="container mx-auto py-20">
            <h2 className="text-4xl font-bold text-white">
                THE LIBRARY
            </h2>
            <p className="text-[#C2F800]">Twelve lifts covering every major muscle group.</p>
        </div>
        <div className="container mx-auto grid gap-6 px-4 pb-20 md:grid-cols-2 lg:grid-cols-3">
            {
                workouts.map((workout)=>{
                   return <WorkoutCard key={workout.id} workout={workout}></WorkoutCard>
                })
            }
        </div>
        </section>
    );
};

export default Library;