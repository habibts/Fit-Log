
import Image from "next/image";
import Link from "next/link";
import { IWorkout } from "@/types/workout.types";
import { Clock3, Flame, Star } from "lucide-react";

interface IWorkoutCardProps {
    workout: IWorkout;
}

const WorkoutCard = ({ workout }: IWorkoutCardProps) => {
    return (
        <Link href={`/workouts/${workout.id}`}>
            <div className="group overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#181818] transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800]">

                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="p-5">

                    {/* Muscle Groups */}
                    <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-semibold text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Workout Name */}
                    <h2 className="mt-4 text-xl font-bold text-white">
                        {workout.name}
                    </h2>

                    {/* Equipment */}
                    <p className="mt-2 text-sm text-gray-400">
                        Equipment: {workout.equipment}
                    </p>

                    {/* Stats */}
                    {/* Stats */}
                    <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[#2A2A2A] pt-4">
                        <div className="flex items-center gap-2">
                            <Clock3 className="h-4 w-4 shrink-0 text-[#C2F800]" />
                            <span className="text-sm font-semibold text-white">
                                {workout.duration} min
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Flame className="h-4 w-4 shrink-0 text-[#C2F800]" />
                            <span className="text-sm font-semibold text-white">
                                {workout.caloriesBurned} kcal
                            </span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 shrink-0 fill-[#C2F800] text-[#C2F800]" />
                            <span className="text-sm font-semibold text-white">
                                {workout.rating}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutCard;

