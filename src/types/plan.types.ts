import { IWorkout } from "./workout.types";

export interface IPlanContext {
    plan: IWorkout[];
    saved: IWorkout[];

    addToPlan: (workout: IWorkout) => void;
    saveForLater: (workout: IWorkout) => void;
}