"use client";

import { createContext, ReactNode, useState } from "react";
import { IWorkout } from "@/types/workout.types";
import { IPlanContext, ActiveTab } from "@/types/plan.types";

const PlanContext = createContext<IPlanContext | null>(null);

interface IPlanProviderProps {
    children: ReactNode;
}

const PlanProvider = ({ children }: IPlanProviderProps) => {
    const [plan, setPlan] = useState<IWorkout[]>([]);
    const [saved, setSaved] = useState<IWorkout[]>([]);

    const [activeTab, setActiveTab] =
        useState<ActiveTab>("plan");

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

    const markAsDone = (id: number) => {
        setPlan((prevPlan) =>
            prevPlan.filter((workout) => workout.id !== id)
        );
    };

    const removeFromPlan = (
        id: number,
        fromSaved: boolean = false
    ) => {
        if (fromSaved) {
            setSaved((prevSaved) =>
                prevSaved.filter((workout) => workout.id !== id)
            );

            return;
        }

        setPlan((prevPlan) =>
            prevPlan.filter((workout) => workout.id !== id)
        );
    };

    return (
        <PlanContext.Provider
            value={{
                plan,
                saved,

                activeTab,
                setActiveTab,

                addToPlan,
                saveForLater,

                markAsDone,
                removeFromPlan,
            }}
        >
            {children}
        </PlanContext.Provider>
    );
};

export { PlanProvider };
export default PlanContext;