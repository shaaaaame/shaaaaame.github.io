import React from "react";
import { Flex, Box } from "@mantine/core";
import { motion } from "framer-motion";

function Loading() {
    return (
        <Flex
            style={{
                backgroundColor: "var(--mantine-color-black)",
            }}
            w="100vw"
            h="100vh"
            justify={"center"}
            align={"center"}
        >
            <motion.div
                style={{
                    backgroundColor: "var(--mantine-color-white)",
                    width: "30px",
                    height: "30px",
                }}
                animate={{ rotate: 90 }}
                transition={{
                    repeatDelay: 0.5,
                    repeat: Infinity,
                }}
            ></motion.div>
        </Flex>
    );
}

export default Loading;