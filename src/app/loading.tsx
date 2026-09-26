const Loading = () => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-black">
            <div className="flex flex-col items-center gap-4">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#2A2A2A] border-t-[#C2F800]" />

                <p className="text-sm font-medium text-gray-400">
                    Loading workouts...
                </p>
            </div>
        </main>
    );
};

export default Loading;