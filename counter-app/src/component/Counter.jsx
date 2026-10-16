
import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="min-h-screen bg-[#242424] text-[#f5f5f5] flex flex-col items-center px-4 pt-20">
            <h1 className="text-5xl sm:text-7xl font-bold text-center mb-14">
                Counter App
            </h1>

            <p className="text-xl sm:text-3xl text-[#dedede] mb-8">
                Current Count: {count}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
                <button
                    onClick={() => setCount((prev) => prev + 1)}
                    className="bg-[#191919] hover:bg-[#303030] px-7 py-5 rounded-2xl text-xl sm:text-2xl font-semibold transition-colors"
                >
                    <span className="text-purple-400 mr-2">➕</span>
                    Increment
                </button>

                <button
                    onClick={() => setCount((prev) => prev - 1)}
                    className="bg-[#191919] hover:bg-[#303030] px-7 py-5 rounded-2xl text-xl sm:text-2xl font-semibold transition-colors"
                >
                    <span className="text-purple-400 mr-2">➖</span>
                    Decrement
                </button>

                <button
                    onClick={() => setCount(0)}
                    className="bg-[#191919] hover:bg-[#303030] px-7 py-5 rounded-2xl text-xl sm:text-2xl font-semibold transition-colors"
                >
                    <span className="mr-2">🔄</span>
                    Reset
                </button>
            </div>
        </div>
    );
}

