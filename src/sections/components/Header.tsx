import React from "react";

import { Grid, Flex, Box, Text } from "@mantine/core";
import { useInView, motion } from "framer-motion";

const gutter = {
    base: "20px",
};

function Header() {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { amount: "all" });
    return (
        <Grid gutter={gutter} columns={8} ref={ref}>
            <Grid.Col span={6}>
                <Flex gap={"10px"}>
                    <Box
                        w="1em"
                        h="1em"
                        style={{
                            aspectRatio: 1,
                            backgroundColor: "var(--mantine-color-black)",
                        }}
                    ></Box>
                    <Text style={{ lineHeight: "1em" }}>HAN XHENG CHEW</Text>
                </Flex>
            </Grid.Col>
            <Grid.Col span={1} style={{ lineHeight: "1em" }}>
                portfolio
            </Grid.Col>
            <Grid.Col span={1} style={{ lineHeight: "1em" }}>
                2024
            </Grid.Col>
            <Grid.Col span={8} pb={0}>
                <motion.div
                    style={{
                        borderBottom: "1px solid var(--mantine-color-black)",
                        width: "100%",
                        marginTop: "-15px",
                    }}
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                        ease: "easeInOut",
                        duration: "2",
                        type: "tween",
                        stiffness: 20,
                    }}
                ></motion.div>
            </Grid.Col>
        </Grid>
    );
}

export default Header;
