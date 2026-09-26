"use client";

import toast from "react-hot-toast";
import { Bookmark, Plus } from "lucide-react";

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

    const planFull = plan.length >= 5;

    const handleAddToPlan = () => {
        if (alreadyAdded) {
            toast.error("Already added to today's plan");
            return;
        }

        if (planFull) {
            toast.error("Today's plan is full");
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
            <button
                onClick={handleAddToPlan}
                className={`flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                    alreadyAdded
                        ? "bg-gray-700 text-gray-400"
                        : "bg-[#C2F800] text-black hover:-translate-y-1 hover:bg-[#b8ed00) hover:shadow-lg"
                }`}
            >
                <Plus className="h-5 w-5" />

                {alreadyAdded
                    ? "Already Added"
                    : "Add to today's plan"}
            </button>

            <button
                onClick={handleSaveForLater}
                className={`flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                    alreadySaved
                        ? "border border-gray-600 text-gray-500"
                        : "border border-[#C2F800] text-[#C2F800] hover:-translate-y-1 hover:bg-[#C2F800] hover:text-black hover:shadow-lg"
                }`}
            >
                <Bookmark className="h-5 w-5" />

                {alreadySaved
                    ? "Saved"
                    : "Save for later"}
            </button>
        </div>
    );
};

export default WorkoutActions;