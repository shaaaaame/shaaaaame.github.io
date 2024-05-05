import React, { useRef } from "react";
import { Grid, Text, Box, Flex } from "@mantine/core";
import Header from "../components/Header.tsx";
import AnimatedTitle from "../components/AnimatedTitle.tsx";
import { motion, useInView } from "framer-motion";

function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: "all" });
    const gutter = {
        base: "20px",
    };
    return (
        <Grid
            gutter={gutter}
            columns={8}
            w="100%"
            h="100vh"
            p="20px 70px 20px 70px"
            style={{
                backgroundColor: "var(--mantine-color-white)",
            }}
        >
            <Grid.Col span={8}>
                <Header />
            </Grid.Col>
            <Grid.Col
                span={8}
                style={{ textAlign: "right" }}
                pt="20px"
                pb="20px"
            >
                <Text>04</Text>
                <AnimatedTitle
                    title={"CONTACT"}
                    fontSize={"100px"}
                    lineHeight={"100px"}
                    delay={0}
                />
            </Grid.Col>
            <Grid.Col span={8}>
                <Box
                    style={{
                        borderBottom: "1px solid var(--mantine-color-black)",
                    }}
                    w="100%"
                ></Box>
            </Grid.Col>
            <Grid.Col span={8} style={{ display: "flex", gap: "40px" }}>
                <AnimatedTitle
                    title={"GET"}
                    fontSize={"150px"}
                    lineHeight={"175px"}
                    delay={0}
                />{" "}
                <AnimatedTitle
                    title={"IN"}
                    fontSize={"150px"}
                    lineHeight={"175px"}
                    delay={0.1}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <AnimatedTitle
                    title={"TOUCH"}
                    fontSize={"150px"}
                    lineHeight={"175px"}
                    delay={0.2}
                />
            </Grid.Col>
            <Grid.Col span={2} mt="50px">
                <Text>(let's build something great.)</Text>
            </Grid.Col>
            <Grid.Col span={6} ref={ref}>
                <motion.div
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                        hidden: {
                            width: 0,
                        },

                        visible: {
                            width: "100%",
                        },
                    }}
                    transition={{
                        ease: "easeInOut",
                        duration: ".5",
                    }}
                    style={{
                        backgroundColor: "var(--mantine-color-black)",
                        height: "100%",
                        position: "relative",
                        left: "0",
                        top: 0,
                    }}
                ></motion.div>
            </Grid.Col>
            <Grid.Col span={2}>
                <Flex direction={"column"}>
                    <Grid
                        columns={2}
                        gutter={gutter}
                        pb={"10px"}
                        style={{
                            borderTop: "1px solid var(--mantine-color-black)",
                        }}
                    >
                        <Grid.Col span={1}>EMAIL</Grid.Col>
                        <Grid.Col span={1}>hanxheng@gmail.com</Grid.Col>
                    </Grid>
                    <Grid
                        columns={2}
                        gutter={gutter}
                        pb={"10px"}
                        style={{
                            borderTop: "1px solid var(--mantine-color-black)",
                        }}
                    >
                        <Grid.Col span={1}>PHONE</Grid.Col>
                        <Grid.Col span={1}>+1 416 768 8441</Grid.Col>
                    </Grid>
                    <Grid
                        columns={2}
                        gutter={gutter}
                        pb={"10px"}
                        style={{
                            borderTop: "1px solid var(--mantine-color-black)",
                        }}
                    >
                        <Grid.Col span={1}>LINKEDIN</Grid.Col>
                        <Grid.Col span={1}>hanxheng</Grid.Col>
                    </Grid>
                    <Grid
                        columns={2}
                        gutter={gutter}
                        pb={"10px"}
                        style={{
                            borderTop: "1px solid var(--mantine-color-black)",
                        }}
                    >
                        <Grid.Col span={1}>GITHUB</Grid.Col>
                        <Grid.Col span={1}>shaaaaaaaame</Grid.Col>
                    </Grid>
                </Flex>
            </Grid.Col>
            <Grid.Col span={8} mb="5vh">
                <Box
                    style={{
                        borderBottom: "1px solid var(--mantine-color-black)",
                    }}
                    w="100%"
                ></Box>
            </Grid.Col>
        </Grid>
    );
}

export default Contact;
