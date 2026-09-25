import { IWorkout } from "./workout.types";

export type ActiveTab = "plan" | "saved";

export interface IPlanContext {
    plan: IWorkout[];
    saved: IWorkout[];

    activeTab: ActiveTab;
    setActiveTab: (tab: ActiveTab) => void;

    addToPlan: (workout: IWorkout) => void;
    saveForLater: (workout: IWorkout) => void;

    markAsDone: (id: number) => void;
    removeFromPlan: (id: number, fromSaved?: boolean) => void;
}