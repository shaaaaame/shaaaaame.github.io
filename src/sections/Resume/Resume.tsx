import { Box, Flex, Grid, Text } from "@mantine/core";
import "@mantine/core/styles.css";

import React from "react";
import AnimatedTitle from "../components/AnimatedTitle.tsx";

export default function Resume() {
    const gutter = {
        base: "20px",
    };
    return (
        <Grid
            gutter={gutter}
            columns={8}
            w="100%"
            style={{
                backgroundColor: "var(--mantine-color-black)",
                color: "var(--mantine-color-white)",
            }}
            p="20px 70px 20px 70px"
            mb="30vh"
        >
            <Grid.Col span={8}>
                <Grid
                    gutter={gutter}
                    style={{
                        borderBottom: "1px solid var(--mantine-color-white)",
                        paddingBottom: "5px",
                    }}
                    columns={8}
                >
                    <Grid.Col span={6}>
                        <Flex gap={"10px"}>
                            <Box
                                w="1em"
                                h="1em"
                                style={{
                                    aspectRatio: 1,
                                    backgroundColor:
                                        "var(--mantine-color-white)",
                                }}
                            ></Box>
                            <Text style={{ lineHeight: "1em" }}>
                                HAN XHENG CHEW
                            </Text>
                        </Flex>
                    </Grid.Col>
                    <Grid.Col span={1} style={{ lineHeight: "1em" }}>
                        portfolio
                    </Grid.Col>
                    <Grid.Col span={1} style={{ lineHeight: "1em" }}>
                        2024
                    </Grid.Col>
                </Grid>
            </Grid.Col>
            <Grid.Col span={8}>
                <Text>03</Text>
                <AnimatedTitle
                    title={"RESUME"}
                    fontSize={"100px"}
                    lineHeight={"100px"}
                    delay={0}
                />
            </Grid.Col>
            <Grid.Col span={5} h={"70vh"}>
                <iframe
                    title="resume"
                    src="https://drive.google.com/file/d/1LkPjYcXagi2Y9vSHTZzDocAxg4_Bbrn3/preview"
                    width={"100%"}
                    height={"100%"}
                    style={{ border: "1px solid var(--mantine-color-white)" }}
                />
            </Grid.Col>
            <Grid.Col span={1} h={"70vh"}>
                <Box
                    w="100%"
                    h="100%"
                    style={{ border: "1px solid var(--mantine-color-white)" }}
                ></Box>
            </Grid.Col>
            <Grid.Col span={1} h={"70vh"}>
                <Box
                    w="100%"
                    h="100%"
                    style={{ border: "1px solid var(--mantine-color-white)" }}
                ></Box>
            </Grid.Col>
            <Grid.Col span={1} h={"70vh"}>
                <Box
                    w="100%"
                    h="100%"
                    style={{ border: "1px solid var(--mantine-color-white)" }}
                ></Box>
            </Grid.Col>

            <Grid.Col span={8} mb="5vh">
                <Box
                    style={{
                        borderBottom: "1px solid var(--mantine-color-white)",
                    }}
                    w="100%"
                ></Box>
            </Grid.Col>
        </Grid>
    );
}
