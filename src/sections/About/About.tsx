import { Box, Container, Flex, Grid, Image, Text } from "@mantine/core";
import "@mantine/core/styles.css";

import React from "react";

const AboutHeader = () => {};

export default function About() {
    const gutter = {
        base: "20px",
    };
    return (
        <Grid
            gutter={gutter}
            columns={8}
            w="100%"
            h="150vh"
            style={{
                color: "var(--mantine-color-white)",
                backgroundColor: "var(--mantine-color-black)",
            }}
            p="20px 70px 20px 70px"
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
            <Grid.Col span={3} mt="50px">
                <Text>01</Text>
                <Text
                    style={{
                        fontSize: "100px",
                        lineHeight: "100px",
                    }}
                >
                    ABOUT
                </Text>
                <Box
                    w="100%"
                    style={{
                        borderTop: "1px solid var(--mantine-color-white)",
                    }}
                ></Box>
                <Grid w="100%" columns={3} mt="20vh" pr="10px">
                    <Grid.Col span={3}>
                        <Box
                            style={{
                                borderTop:
                                    "1px solid var(--mantine-color-white)",
                            }}
                            w="100%"
                        ></Box>
                    </Grid.Col>
                    <Grid.Col span={2}>
                        <Text>computer science student</Text>
                        <Text>frontend developer</Text>
                    </Grid.Col>
                    <Grid.Col span={1}>
                        <Text>university of toronto</Text>
                        <Text>'2026</Text>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <Box
                            style={{
                                borderTop:
                                    "1px solid var(--mantine-color-white)",
                            }}
                            w="100%"
                        ></Box>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <Text>based in toronto</Text>
                        <Text>from malaysia</Text>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
            <Grid.Col
                span={5}
                m="5vh 0 5vh 0"
                h="80vh"
                pos={"relative"}
                style={{
                    border: "1px solid var(--mantine-color-white)",
                }}
            >
                <Flex w={"100%"} h="100%" justify={"center"} align={"center"}>
                    <Image src={"cat.png"} alt="me" w="70%" h={"70%"} />
                </Flex>
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
