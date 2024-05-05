import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedTitle({ title, fontSize, lineHeight, delay }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: "all" });
    const variants = {
        hidden: {
            y: lineHeight,
        },
        visible: {
            y: 0,
        },
    };
    let duration = 0.2;

    return (
        <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{
                lineHeight: lineHeight,
                fontSize: fontSize,
                overflow: "hidden",
                display: "inherit",
            }}
            transition={{ staggerChildren: 0.05 }}
            aria-hidden
            ref={ref}
        >
            {title.split("").map((char) => {
                duration *= 1.2;
                return (
                    <motion.div
                        variants={variants}
                        style={{ display: "inline-block" }}
                        transition={{
                            ease: "easeInOut",
                            duration: duration,
                            delay: delay,
                        }}
                    >
                        {char}
                    </motion.div>
                );
            })}
        </motion.div>
    );
}

export default AnimatedTitle;
