"use client";

import { useContext } from "react";
import PlanContext from "@/context/PlanContext";

const usePlan = () => {
    const context = useContext(PlanContext);

    if (!context) {
        throw new Error("usePlan must be used inside PlanProvider");
    }

    return context;
};

export default usePlan;