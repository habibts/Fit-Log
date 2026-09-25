"use client";

import { useState } from "react";
import Link from "next/link";
import usePlan from "@/hooks/usePlan";
import PlanWorkoutCard from "@/components/features/my-plan/PlanWorkoutCard";

const MyPlanPage = () => {
    const { plan, saved } = usePlan();

    const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

    const activeList = activeTab === "plan" ? plan : saved;

    const totalMinutes = activeList.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = activeList.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    return (
        <main className="min-h-screen bg-black text-white">
            <section className="container mx-auto px-4 py-12">

                {/* Header */}
                <div>
                    <h1 className="text-4xl font-bold">
                        MY PLAN
                    </h1>

                    <p className="mt-2 text-gray-400">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Metrics */}
                <div className="mt-10 grid gap-4 sm:grid-cols-3">

                    {/* Exercises */}
                    <div className="rounded-2xl border border-[#2A2A2A] bg-[#151922] p-6">
                        <p className="text-sm text-gray-400">
                            EXERCISES
                        </p>

                        <p className="mt-2 text-3xl font-bold text-[#C2F800]">
                            {activeList.length}
                        </p>
                    </div>

                    {/* Minutes */}
                    <div className="rounded-2xl border border-[#2A2A2A] bg-[#151922] p-6">
                        <p className="text-sm text-gray-400">
                            MINUTES
                        </p>

                        <p className="mt-2 text-3xl font-bold text-[#C2F800]">
                            {totalMinutes}
                        </p>
                    </div>

                    {/* Calories */}
                    <div className="rounded-2xl border border-[#2A2A2A] bg-[#151922] p-6">
                        <p className="text-sm text-gray-400">
                            CALORIES
                        </p>

                        <p className="mt-2 text-3xl font-bold text-[#C2F800]">
                            {totalCalories}
                        </p>
                    </div>

                </div>

                {/* Tabs */}
                <div className="mt-10 flex gap-2 border-b border-[#2A2A2A]">

                    <button
                        onClick={() => setActiveTab("plan")}
                        className={`border-b-2 px-5 py-3 text-sm font-semibold transition ${
                            activeTab === "plan"
                                ? "border-[#C2F800] text-[#C2F800]"
                                : "border-transparent text-gray-500 hover:text-white"
                        }`}
                    >
                        Today&apos;s Plan
                    </button>

                    <button
                        onClick={() => setActiveTab("saved")}
                        className={`border-b-2 px-5 py-3 text-sm font-semibold transition ${
                            activeTab === "saved"
                                ? "border-[#C2F800] text-[#C2F800]"
                                : "border-transparent text-gray-500 hover:text-white"
                        }`}
                    >
                        Saved
                    </button>

                </div>

                {/* Workout List / Empty State */}
                {activeList.length === 0 ? (
                    <div className="mt-16 flex flex-col items-center justify-center text-center">

                        <h2 className="text-2xl font-bold text-white">
                            NOTHING HERE YET
                        </h2>

                        <p className="mt-3 max-w-md text-gray-400">
                            {activeTab === "plan"
                                ? "Browse the library and add a lift to get today moving."
                                : "Save workouts for later and they will appear here."}
                        </p>

                        <Link
                            href="/"
                            className="mt-6 rounded-full bg-[#C2F800] px-6 py-3 font-semibold text-black transition hover:bg-[#b8ed00]"
                        >
                            Go to workouts
                        </Link>

                    </div>
                ) : (
                    <div className="mt-8 space-y-4">
                        {activeList.map((workout) => (
                            <PlanWorkoutCard
                                key={workout.id}
                                workout={workout}
                            />
                        ))}
                    </div>
                )}

            </section>
        </main>
    );
};

export default MyPlanPage;