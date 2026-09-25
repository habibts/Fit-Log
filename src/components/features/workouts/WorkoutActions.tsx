"use client";

import toast from "react-hot-toast";
import { IWorkout } from "@/types/workout.types";
import usePlan from "@/hooks/usePlan";

interface IWorkoutActionsProps {
    workout: IWorkout;
}

const WorkoutActions = ({ workout }: IWorkoutActionsProps) => {
    const { plan, addToPlan } = usePlan();

    const alreadyAdded = plan.some(
        (item) => item.id === workout.id
    );

    const handleAddToPlan = () => {
        if (alreadyAdded) {
            toast.error("Already added to today's plan");
            return;
        }

        addToPlan(workout);

        toast.success("Added to today's plan");
    };

    return (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
                onClick={handleAddToPlan}
                className={`flex-1 rounded-full px-6 py-3 font-semibold transition ${
                    alreadyAdded
                        ? "bg-gray-700 text-gray-300"
                        : "bg-[#C2F800] text-black hover:bg-[#b8ed00]"
                }`}
            >
                {alreadyAdded
                    ? "✓ Already Added"
                    : "+ Add to today's plan"}
            </button>

            <button
                className="flex-1 rounded-full border border-[#C2F800] px-6 py-3 font-semibold text-[#C2F800] transition hover:bg-[#C2F800] hover:text-black"
            >
                ♡ Save for later
            </button>
        </div>
    );
};

export default WorkoutActions;