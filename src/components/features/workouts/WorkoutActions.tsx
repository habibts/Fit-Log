"use client";

import toast from "react-hot-toast";
import { IWorkout } from "@/types/workout.types";
import usePlan from "@/hooks/usePlan";

interface IWorkoutActionsProps {
    workout: IWorkout;
}

const WorkoutActions = ({ workout }: IWorkoutActionsProps) => {
    const { plan, saved, addToPlan, saveForLater } = usePlan();

    const alreadyAdded = plan.some(
        (item) => item.id === workout.id
    );

    const alreadySaved = saved.some(
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

    const handleSaveForLater = () => {
        if (alreadySaved) {
            toast.error("Already saved for later");
            return;
        }

        saveForLater(workout);
        toast.success("Saved for later");
    };

    return (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            {/* Add To Plan */}
            <button
                onClick={handleAddToPlan}
                className={`flex-1 rounded-full px-6 py-3 font-semibold transition ${
                    alreadyAdded
                        ? "cursor-not-allowed bg-gray-700 text-gray-400"
                        : "bg-[#C2F800] text-black hover:bg-[#b8ed00]"
                }`}
            >
                {alreadyAdded
                    ? "✓ Already Added"
                    : "+ Add to today's plan"}
            </button>

            {/* Save For Later */}
            <button
                onClick={handleSaveForLater}
                className={`flex-1 rounded-full px-6 py-3 font-semibold transition ${
                    alreadySaved
                        ? "cursor-not-allowed border border-gray-600 text-gray-500"
                        : "border border-[#C2F800] text-[#C2F800] hover:bg-[#C2F800] hover:text-black"
                }`}
            >
                {alreadySaved
                    ? "✓ Saved"
                    : "♡ Save for later"}
            </button>

        </div>
    );
};

export default WorkoutActions;