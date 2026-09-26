"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import usePlan from "@/hooks/usePlan";
import PlanWorkoutCard from "@/components/features/my-plan/PlanWorkoutCard";

type SortOption = "duration" | "calories" | "rating";

const MyPlanPage = () => {
    const {
        plan,
        saved,
        activeTab,
        setActiveTab,
    } = usePlan();

    const [sortBy, setSortBy] =
        useState<SortOption>("duration");

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const activeList =
        activeTab === "plan" ? plan : saved;

    const sortedList = [...activeList].sort((a, b) => {
        if (sortBy === "duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "calories") {
            return a.caloriesBurned - b.caloriesBurned;
        }

        return b.rating - a.rating;
    });

    const totalMinutes = activeList.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = activeList.reduce(
        (total, workout) =>
            total + workout.caloriesBurned,
        0
    );

    return (
        <main className="min-h-screen bg-black text-white">
            <section className="container mx-auto px-4 py-12">

                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold sm:text-4xl">
                        MY PLAN
                    </h1>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Metrics */}
                <div className="mt-10 grid gap-4 sm:grid-cols-3">

                    <div className="rounded-2xl border border-[#2A2A2A] bg-[#151922] p-5 transition hover:border-[#3A3A3A] sm:p-6">
                        <p className="text-sm font-medium text-gray-400">
                            EXERCISES
                        </p>

                        <p className="mt-2 text-3xl font-bold text-[#C2F800]">
                            {activeList.length}
                        </p>
                    </div>

                    <div className="rounded-2xl border border-[#2A2A2A] bg-[#151922] p-5 transition hover:border-[#3A3A3A] sm:p-6">
                        <p className="text-sm font-medium text-gray-400">
                            MINUTES
                        </p>

                        <p className="mt-2 text-3xl font-bold text-[#C2F800]">
                            {totalMinutes}
                        </p>
                    </div>

                    <div className="rounded-2xl border border-[#2A2A2A] bg-[#151922] p-5 transition hover:border-[#3A3A3A] sm:p-6">
                        <p className="text-sm font-medium text-gray-400">
                            CALORIES
                        </p>

                        <p className="mt-2 text-3xl font-bold text-[#C2F800]">
                            {totalCalories}
                        </p>
                    </div>

                </div>

                {/* Tabs + Sort */}
                <div className="mt-10 flex flex-col gap-4 rounded-xl border border-[#2A2A2A] bg-[#151922] p-2 sm:flex-row sm:items-center sm:justify-between">

                    {/* Tabs */}
                    <div className="flex w-full items-center gap-1 sm:w-auto">

                        <button
                            onClick={() => setActiveTab("plan")}
                            className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition sm:flex-none sm:px-5 ${
                                activeTab === "plan"
                                    ? "bg-[#C2F800] text-black"
                                    : "text-gray-400 hover:bg-[#222630] hover:text-white"
                            }`}
                        >
                            Today&apos;s Plan
                        </button>

                        <button
                            onClick={() => setActiveTab("saved")}
                            className={`flex-1 rounded-lg px-4 py-2.5 text-sm font-semibold transition sm:flex-none sm:px-5 ${
                                activeTab === "saved"
                                    ? "bg-[#C2F800] text-black"
                                    : "text-gray-400 hover:bg-[#222630] hover:text-white"
                            }`}
                        >
                            Saved
                        </button>

                    </div>

                    {/* Sort */}
                    <div className="flex items-center justify-between gap-3 px-2 sm:justify-end sm:px-0">

                        <label
                            htmlFor="sort"
                            className="text-sm font-medium text-gray-400"
                        >
                            Sort By
                        </label>

                        <div className="relative">
                            <select
                                id="sort"
                                value={sortBy}
                                onChange={(event) =>
                                    setSortBy(
                                        event.target.value as SortOption
                                    )
                                }
                                className="w-32 appearance-none rounded-lg border border-[#2A2A2A] bg-[#0F1115] px-3 py-2 pr-8 text-sm text-white outline-none transition hover:border-[#444] focus:border-[#C2F800]"
                            >
                                <option value="duration">
                                    Duration
                                </option>

                                <option value="calories">
                                    Calories
                                </option>

                                <option value="rating">
                                    Rating
                                </option>
                            </select>

                            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                                ▼
                            </span>
                        </div>

                    </div>
                </div>

                {/* Loading State */}
                {isLoading ? (
                    <div className="flex min-h-60 items-center justify-center">
                        <p className="text-sm text-gray-400">
                            Loading workouts…
                        </p>
                    </div>
                ) : sortedList.length === 0 ? (

                    /* Empty State */
                    <div className="mt-16 flex flex-col items-center justify-center px-4 text-center">

                        <h2 className="text-2xl font-bold text-white">
                            NOTHING HERE YET
                        </h2>

                        <p className="mt-3 max-w-md text-sm leading-6 text-gray-400 sm:text-base">
                            {activeTab === "plan"
                                ? "Browse the library and add a lift to get today moving."
                                : "Save workouts for later and they will appear here."}
                        </p>

                        <Link
                            href="/"
                            className="mt-6 rounded-full bg-[#C2F800] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#b8ed00]"
                        >
                            Go to workouts
                        </Link>

                    </div>

                ) : (

                    /* Workout List */
                    <div className="mt-8 space-y-4">

                        {sortedList.map((workout) => (
                            <PlanWorkoutCard
                                key={workout.id}
                                workout={workout}
                                isSaved={activeTab === "saved"}
                            />
                        ))}

                    </div>
                )}

            </section>
        </main>
    );
};

export default MyPlanPage;