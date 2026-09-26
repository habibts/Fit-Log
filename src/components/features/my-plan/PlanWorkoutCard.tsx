"use client";

import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { IWorkout } from "@/types/workout.types";
import usePlan from "@/hooks/usePlan";
import { Clock3, Flame, Star } from "lucide-react";

interface IPlanWorkoutCardProps {
    workout: IWorkout;
    isSaved: boolean;
}

const PlanWorkoutCard = ({
    workout,
    isSaved,
}: IPlanWorkoutCardProps) => {
    const { markAsDone, removeFromPlan } = usePlan();

    const handleMarkAsDone = () => {
        markAsDone(workout.id);
        toast.success(`${workout.name} marked as done`);
    };

    const handleRemove = () => {
        removeFromPlan(workout.id, isSaved);
        toast.success(
            isSaved
                ? `${workout.name} removed from saved`
                : `${workout.name} removed from today's plan`
        );
    };

    return (
        <div className="rounded-2xl border border-[#2A2A2A] bg-[#151922] p-4 transition hover:border-[#3A3A3A]">
            <div className="flex flex-col gap-5 md:flex-row md:items-center">

                {/* Workout Info */}
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

                    {/* Details */}
                    <div className="min-w-0">
                        <h3 className="text-xl font-bold text-white">
                            {workout.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-400">
                            {workout.equipment}
                        </p>

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

                {/* Actions */}
                <div className="flex items-center justify-end gap-2">

                    {/* View Details */}
                    <Link
                        href={`/workouts/${workout.id}`}
                        className="rounded-full border border-[#C2F800] px-4 py-2 text-center text-sm font-semibold text-[#C2F800] transition hover:bg-[#C2F800] hover:text-black"
                    >
                        View Details
                    </Link>

                    {/* Mark as Done */}
                    {!isSaved && (
                        <button
                            onClick={handleMarkAsDone}
                            className="flex items-center gap-2 rounded-full bg-[#C2F800] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#b8ed00]"
                        >
                            <span>✓</span>
                            Mark as Done
                        </button>
                    )}

                    {/* Remove */}
                    <button
                        onClick={handleRemove}
                        aria-label={`Remove ${workout.name}`}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl text-gray-500 transition hover:bg-red-500/10 hover:text-red-500"
                    >
                        ×
                    </button>

                </div>
            </div>
        </div>
    );
};

export default PlanWorkoutCard;