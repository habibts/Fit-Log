import { notFound } from "next/navigation";

import WorkoutDetails from "@/components/features/workouts/WorkoutDetails";
import { IWorkout } from "@/types/workout.types";

interface IWorkoutDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getWorkout = async (id: string): Promise<IWorkout | null> => {
    const res = await fetch(
        `https://api.api-store.workers.dev/api/fitlog/${id}`
    );

    if (!res.ok) {
        return null;
    }

    const data = await res.json();

    if (!data || !data.id) {
        return null;
    }

    return data;
};

const WorkoutDetailPage = async ({
    params,
}: IWorkoutDetailPageProps) => {
    const { id } = await params;

    const workout = await getWorkout(id);

    if (!workout) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <WorkoutDetails workout={workout} />
        </main>
    );
};

export default WorkoutDetailPage;