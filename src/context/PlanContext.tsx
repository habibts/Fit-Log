"use client";

import { createContext, ReactNode, useState } from "react";
import { IWorkout } from "@/types/workout.types";
import { IPlanContext } from "@/types/plan.types";

const PlanContext = createContext<IPlanContext | null>(null);

interface IPlanProviderProps {
    children: ReactNode;
}

const PlanProvider = ({ children }: IPlanProviderProps) => {
    const [plan, setPlan] = useState<IWorkout[]>([]);

    const addToPlan = (workout: IWorkout) => {
        setPlan((prevPlan) => {
            const alreadyAdded = prevPlan.some(
                (item) => item.id === workout.id
            );

            if (alreadyAdded) {
                return prevPlan;
            }

            return [...prevPlan, workout];
        });
    };

    return (
        <PlanContext.Provider
            value={{
                plan,
                addToPlan,
            }}
        >
            {children}
        </PlanContext.Provider>
    );
};

export { PlanProvider };
export default PlanContext;