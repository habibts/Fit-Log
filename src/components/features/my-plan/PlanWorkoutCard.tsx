import Image from "next/image";
import Link from "next/link";
import { IWorkout } from "@/types/workout.types";

interface IPlanWorkoutCardProps {
    workout: IWorkout;
}

const PlanWorkoutCard = ({ workout }: IPlanWorkoutCardProps) => {
    return (
        <div className="rounded-2xl border border-[#2A2A2A] bg-[#151922] p-4">

            <div className="flex flex-col gap-5 md:flex-row md:items-center">

                {/* Left Side */}
                <div className="flex min-w-0 flex-1 gap-4">

                    {/* Image */}
                    <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-[#222]">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            width={500}
                            height={600}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Workout Info */}
                    <div className="min-w-0">

                        <h3 className="text-xl font-bold text-white">
                            {workout.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-400">
                            {workout.equipment}
                        </p>

                        {/* Stats */}
                        <div className="mt-4 flex flex-wrap gap-4 text-sm">

                            <span className="text-gray-400">
                                ⏱ {workout.duration} min
                            </span>

                            <span className="text-gray-400">
                                🔥 {workout.caloriesBurned} kcal
                            </span>

                            <span className="text-[#C2F800]">
                                ★ {workout.rating}
                            </span>

                        </div>

                    </div>
                </div>

                {/* Right Side - Actions */}
                <div className="flex flex-col gap-2 md:w-40">

                    <Link
                        href={`/workouts/${workout.id}`}
                        className="rounded-full border border-[#C2F800] px-4 py-2 text-center text-sm font-semibold text-[#C2F800] transition hover:bg-[#C2F800] hover:text-black"
                    >
                        View Details
                    </Link>

                    <button className="rounded-full bg-[#C2F800] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#b8ed00]">
                        Mark as Done
                    </button>

                    <button className="self-end px-3 py-1 text-xl text-gray-500 transition hover:text-red-500">
                        ×
                    </button>

                </div>

            </div>

        </div>
    );
};

export default PlanWorkoutCard;