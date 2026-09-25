import Image from "next/image";
import { IWorkout } from "@/types/workout.types";
import WorkoutActions from "./WorkoutActions";


interface IWorkoutDetailsProps {
    workout: IWorkout;
}

const WorkoutDetails = ({ workout }: IWorkoutDetailsProps) => {
    return (
        <section className="container mx-auto px-4 py-12">
            <div className="grid gap-10 lg:grid-cols-2">

                {/* Image */}
                <div className="relative min-h-125 overflow-hidden rounded-2xl bg-[#181818]">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                </div>

                {/* Right Side - Details */}
                <div>

                    {/* Title */}
                    <h1 className="text-4xl font-bold text-white">
                        {workout.name}
                    </h1>

                    {/* Description */}
                    <p className="mt-4 leading-7 text-gray-400">
                        {workout.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#C2F800] px-4 py-2 text-sm font-semibold text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Key Specs */}
                    <div className="mt-8">
                        <h2 className="text-xl font-bold text-white">
                            KEY SPECS
                        </h2>

                        <div className="mt-4 overflow-hidden rounded-xl border border-[#1E2330] bg-[#151922]">

                            <div className="flex justify-between border-b border-gray-700 px-5 py-4 transition hover:bg-[#1B202B]">
                                <span className="text-sm text-[#9CA3AF]">
                                    EQUIPMENT
                                </span>

                                <span className="text-sm font-medium text-white">
                                    {workout.equipment}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-gray-700 px-5 py-4 transition hover:bg-[#1B202B]">
                                <span className="text-sm text-[#9CA3AF]">
                                    DIFFICULTY
                                </span>

                                <span className="text-sm font-medium text-white">
                                    {workout.difficulty}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-gray-700 px-5 py-4 transition hover:bg-[#1B202B]">
                                <span className="text-sm text-[#9CA3AF]">
                                    SETS
                                </span>

                                <span className="text-sm font-medium text-white">
                                    {workout.sets}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-gray-700 px-5 py-4 transition hover:bg-[#1B202B]">
                                <span className="text-sm text-[#9CA3AF]">
                                    REPS
                                </span>

                                <span className="text-sm font-medium text-white">
                                    {workout.reps}
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-gray-700 px-5 py-4 transition hover:bg-[#1B202B]">
                                <span className="text-sm text-[#9CA3AF]">
                                    DURATION
                                </span>

                                <span className="text-sm font-medium text-white">
                                    {workout.duration} min
                                </span>
                            </div>

                            <div className="flex justify-between border-b border-gray-700 px-5 py-4 transition hover:bg-[#1B202B]">
                                <span className="text-sm text-[#9CA3AF]">
                                    CALORIES
                                </span>

                                <span className="text-sm font-medium text-white">
                                    {workout.caloriesBurned} kcal
                                </span>
                            </div>

                            <div className="flex justify-between px-5 py-4">
                                <span className="text-sm text-[#9CA3AF]">
                                    RATING
                                </span>

                                <span className="text-sm font-medium text-white">
                                    {workout.rating}
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="mt-8">
                        <h2 className="text-xl font-bold text-white">
                            INSTRUCTIONS
                        </h2>

                        <ol className="mt-4 space-y-4">
                            {workout.instructions.map((instruction, index) => (
                                <li
                                    key={index}
                                    className="flex gap-4 text-gray-400"
                                >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C2F800] text-sm font-bold text-black">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span>{instruction}</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Actions */}
                    <WorkoutActions workout={workout}></WorkoutActions>

                </div>
            </div>
        </section>
    );
};

export default WorkoutDetails;