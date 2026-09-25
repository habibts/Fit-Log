
import WorkoutDetails from "@/components/features/workouts/WorkoutDetails";
import { IWorkout } from "@/types/workout.types";



interface IWorkoutDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getWorkout = async (id: string): Promise<IWorkout> => {
    const res = await fetch(
        `https://api.abcz.workers.dev/api/fitlog/${id}`
    );

    return res.json();
};

const WorkoutDetailPage = async ({
    params,
}: IWorkoutDetailPageProps) => {
    const { id } = await params;

    const workout = await getWorkout(id);

    return (
        <main className="min-h-screen bg-black text-white">
            <WorkoutDetails workout={workout}></WorkoutDetails>
        </main>
    );
};

export default WorkoutDetailPage;