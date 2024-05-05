import React from "react";
import { useRef } from "react";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { Box } from "@mantine/core";
import useParallax from "../utilities/useParallax.tsx";

function AboutTransition() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });
    const rotate = useParallax(scrollYProgress, 0, 180);

    return (
        <Box
            h="100vw"
            w="100vw"
            style={{
                zIndex: 101,
                maxWidth: "100%",
            }}
            pos="absolute"
            p="10vh 0 0 0"
        >
            <div ref={ref}></div>
            <motion.div
                style={{
                    backgroundColor: "var(--mantine-color-black)",
                    aspectRatio: "1",
                    width: "100%",
                    scale: scrollYProgress,
                    rotate: rotate,
                    zIndex: 2,
                    margin: 0,
                    padding: 0,
                }}
            ></motion.div>
        </Box>
    );
}
export default AboutTransition;
