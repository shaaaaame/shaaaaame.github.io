import React, { useRef } from "react";
import { useTransform, MotionValue } from "framer-motion";

function useParallax(value: MotionValue<number>, from: number, to: number) {
    return useTransform(value, [0, 1], [from, to]);
}

export default useParallax;
