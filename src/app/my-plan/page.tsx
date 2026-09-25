
import Link from "next/link";
const MyPlanPage = () => {
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

                    <div className="rounded-2xl border border-[#2A2A2A] bg-[#151922] p-6">
                        <p className="text-sm text-gray-400">
                            EXERCISES
                        </p>

                        <p className="mt-2 text-3xl font-bold text-[#C2F800]">
                            0
                        </p>
                    </div>

                    <div className="rounded-2xl border border-[#2A2A2A] bg-[#151922] p-6">
                        <p className="text-sm text-gray-400">
                            MINUTES
                        </p>

                        <p className="mt-2 text-3xl font-bold text-[#C2F800]">
                            0
                        </p>
                    </div>

                    <div className="rounded-2xl border border-[#2A2A2A] bg-[#151922] p-6">
                        <p className="text-sm text-gray-400">
                            CALORIES
                        </p>

                        <p className="mt-2 text-3xl font-bold text-[#C2F800]">
                            0
                        </p>
                    </div>

                </div>
                {/* Tabs */}
                <div className="mt-10 flex gap-2 border-b border-[#2A2A2A]">

                    <button
                        className="border-b-2 border-[#C2F800] px-5 py-3 text-sm font-semibold text-[#C2F800]"
                    >
                        Today&apos;s Plan
                    </button>

                    <button
                        className="px-5 py-3 text-sm font-semibold text-gray-500 transition hover:text-white"
                    >
                        Saved
                    </button>

                </div>

                {/* Empty State */}
<div className="mt-16 flex flex-col items-center justify-center text-center">

    <h2 className="text-2xl font-bold text-white">
        NOTHING HERE YET
    </h2>

    <p className="mt-3 max-w-md text-gray-400">
        Browse the library and add a lift to get today moving.
    </p>

    <Link
        href="/"
        className="mt-6 rounded-full bg-[#C2F800] px-6 py-3 font-semibold text-black transition hover:bg-[#b8ed00]"
    >
        Go to workouts
    </Link>

</div>

            </section>
        </main>
    );
};

export default MyPlanPage;