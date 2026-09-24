import React from 'react';
import WorkoutCard from '@/components/features/home/WorkoutCard';

const getLibraryData = async () => {

    const res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    return res.json();

}


const Library = async () => {

    const libraryData = await getLibraryData()
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
                libraryData.map((library)=>{
                   return <WorkoutCard key={library.id}></WorkoutCard>
                })
            }
        </div>
        </section>
    );
};

export default Library;