import Link from "next/link";

const NotFound = () => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
            <div className="text-center">
                <p className="text-sm font-semibold tracking-[3px] text-[#C2F800]">
                    404 ERROR
                </p>

                <h1 className="mt-3 text-4xl font-bold sm:text-6xl">
                    PAGE NOT FOUND
                </h1>

                <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-400 sm:text-base">
                    The page you are looking for does not exist.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-block rounded-full bg-[#C2F800] px-6 py-3 font-semibold text-black transition hover:bg-[#b8ed00]"
                >
                    Go to workouts
                </Link>
            </div>
        </main>
    );
};

export default NotFound;