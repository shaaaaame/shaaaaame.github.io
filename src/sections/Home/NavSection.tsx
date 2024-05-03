import { Container, Text, Flex, Box } from "@mantine/core";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./NavSection.css";

export default function NavSection({ numberString, name }) {
    const [isHover, setIsHover] = useState(false);
    const variants = {
        hover: { scale: 10.01, rotate: 90 },
        not_hover: { scale: 1 },
    };
    return (
        <motion.div
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
        >
            <Container
                style={{
                    border: "1px solid var(--mantine-color-black)",
                    aspectRatio: 1,
                    cursor: "pointer",
                }}
                pos={"relative"}
                p="0"
            >
                <Text pos="absolute" top="10px" left={"10px"}>
                    {numberString}
                </Text>
                <Text pos="absolute" top="10px" right={"10px"}>
                    {name}
                </Text>
                <Flex justify={"center"} align={"center"} w="100%" h="100%">
                    <motion.div
                        animate={isHover ? "hover" : "not_hover"}
                        variants={variants}
                        transition={{ ease: "easeOut", duration: 0.2 }}
                        className="box"
                    ></motion.div>
                </Flex>
            </Container>
        </motion.div>
    );
}
