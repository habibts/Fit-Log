import Image from "next/image";

const WorkoutCard = () => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-[#2A2A2A] bg-[#181818] transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800]">
            
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src="https://img.magnific.com/free-photo/portrait-anime-character-doing-fitness-exercising_23-2151666664.jpg?w=740"
                    alt="Barbell Bench Press"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Muscle Groups */}
                <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-semibold text-black">
                        Chest
                    </span>

                    <span className="rounded-full bg-[#2A2A2A] px-3 py-1 text-xs font-medium text-gray-300">
                        Arms
                    </span>
                </div>

                {/* Workout Name */}
                <h2 className="mt-4 text-xl font-bold text-white">
                    Barbell Bench Press
                </h2>

                {/* Equipment */}
                <p className="mt-2 text-sm text-gray-400">
                    Equipment: Barbell, Bench
                </p>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-[#2A2A2A] pt-4">

                    <div>
                        <p className="text-xs text-gray-500">
                            Duration
                        </p>

                        <p className="mt-1 text-sm font-semibold text-white">
                            25 min
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-500">
                            Calories
                        </p>

                        <p className="mt-1 text-sm font-semibold text-white">
                            180 kcal
                        </p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-500">
                            Rating
                        </p>

                        <p className="mt-1 text-sm font-semibold text-white">
                            ★ 4.8
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorkoutCard;