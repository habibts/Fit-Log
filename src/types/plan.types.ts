import { IWorkout } from "./workout.types";

export interface IPlanContext {
    plan: IWorkout[];
    addToPlan: (workout: IWorkout) => void;
}