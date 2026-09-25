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
    const [saved, setSaved] = useState<IWorkout[]>([]);

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

    const saveForLater = (workout: IWorkout) => {
        setSaved((prevSaved) => {
            const alreadySaved = prevSaved.some(
                (item) => item.id === workout.id
            );

            if (alreadySaved) {
                return prevSaved;
            }

            return [...prevSaved, workout];
        });
    };

    return (
        <PlanContext.Provider
            value={{
                plan,
                saved,
                addToPlan,
                saveForLater,
            }}
        >
            {children}
        </PlanContext.Provider>
    );
};

export { PlanProvider };
export default PlanContext;