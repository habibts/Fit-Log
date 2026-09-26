"use client";

import {
    createContext,
    ReactNode,
    useState,
    useSyncExternalStore,
} from "react";

import { IWorkout } from "@/types/workout.types";
import {
    IPlanContext,
    ActiveTab,
} from "@/types/plan.types";

const PlanContext =
    createContext<IPlanContext | null>(null);

interface IPlanProviderProps {
    children: ReactNode;
}

/* Local Storage Store */

const createStorageStore = <T,>(
    key: string,
    defaultValue: T
) => {
    let cachedValue = defaultValue;
    let cachedRawValue: string | null = null;

    const getSnapshot = () => {
        if (typeof window === "undefined") {
            return defaultValue;
        }

        const rawValue = localStorage.getItem(key);

        if (rawValue === cachedRawValue) {
            return cachedValue;
        }

        cachedRawValue = rawValue;

        if (!rawValue) {
            cachedValue = defaultValue;
            return cachedValue;
        }

        try {
            cachedValue = JSON.parse(rawValue) as T;
        } catch {
            cachedValue = defaultValue;
        }

        return cachedValue;
    };

    const getServerSnapshot = () => {
        return defaultValue;
    };

    const subscribe = (callback: () => void) => {
        window.addEventListener(
            "storage",
            callback
        );

        window.addEventListener(
            "fitlog-storage",
            callback
        );

        return () => {
            window.removeEventListener(
                "storage",
                callback
            );

            window.removeEventListener(
                "fitlog-storage",
                callback
            );
        };
    };

    const setValue = (value: T) => {
        const rawValue = JSON.stringify(value);

        localStorage.setItem(key, rawValue);

        cachedRawValue = rawValue;
        cachedValue = value;

        window.dispatchEvent(
            new Event("fitlog-storage")
        );
    };

    return {
        getSnapshot,
        getServerSnapshot,
        subscribe,
        setValue,
    };
};

/* Plan Provider */

const PlanProvider = ({
    children,
}: IPlanProviderProps) => {
    const planStore = useState(() =>
        createStorageStore<IWorkout[]>(
            "fitlog-plan",
            []
        )
    )[0];

    const savedStore = useState(() =>
        createStorageStore<IWorkout[]>(
            "fitlog-saved",
            []
        )
    )[0];

    const plan = useSyncExternalStore(
        planStore.subscribe,
        planStore.getSnapshot,
        planStore.getServerSnapshot
    );

    const saved = useSyncExternalStore(
        savedStore.subscribe,
        savedStore.getSnapshot,
        savedStore.getServerSnapshot
    );

    const [activeTab, setActiveTab] =
        useState<ActiveTab>("plan");

    /* Add To Plan */

    const addToPlan = (workout: IWorkout) => {
        const alreadyAdded = plan.some(
            (item) => item.id === workout.id
        );

        if (alreadyAdded) {
            return;
        }

        planStore.setValue([
            ...plan,
            workout,
        ]);
    };

    /* Save For Later */

    const saveForLater = (workout: IWorkout) => {
        const alreadySaved = saved.some(
            (item) => item.id === workout.id
        );

        if (alreadySaved) {
            return;
        }

        savedStore.setValue([
            ...saved,
            workout,
        ]);
    };

    /* Mark As Done */

    const markAsDone = (id: number) => {
        const updatedPlan = plan.filter(
            (workout) => workout.id !== id
        );

        planStore.setValue(updatedPlan);
    };

    /* Remove From Plan */

    const removeFromPlan = (
        id: number,
        fromSaved: boolean = false
    ) => {
        if (fromSaved) {
            const updatedSaved = saved.filter(
                (workout) => workout.id !== id
            );

            savedStore.setValue(updatedSaved);

            return;
        }

        const updatedPlan = plan.filter(
            (workout) => workout.id !== id
        );

        planStore.setValue(updatedPlan);
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

export {
    PlanProvider,
};

export default PlanContext;