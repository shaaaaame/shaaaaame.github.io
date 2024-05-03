import { Container, Flex, Grid, Text } from "@mantine/core";
import "@mantine/core/styles.css";

import React from "react";

export default function About() {
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
        >
            <Grid.Col
                span={8}
                style={{
                    borderBottom: "1px solid var(--mantine-color-white)",
                }}
                p={0}
                mt="5vh"
            ></Grid.Col>
            <Grid.Col span={3} p="0" mt="50px">
                <Text>01</Text>
                <Text
                    style={{
                        fontSize: "100px",
                        lineHeight: "100px",
                    }}
                >
                    ABOUT
                </Text>
                <Grid w="100%" columns={3} mt="20vh" pr="10px">
                    <Grid.Col
                        span={3}
                        style={{
                            borderTop: "1px solid var(--mantine-color-white)",
                        }}
                        pb={"5px"}
                    ></Grid.Col>
                    <Grid.Col span={2} p={0}>
                        computer science student
                    </Grid.Col>
                    <Grid.Col span={1} p={0}>
                        university of toronto
                    </Grid.Col>
                    <Grid.Col span={2} p={0}>
                        frontend developer
                    </Grid.Col>
                    <Grid.Col span={1} p={0}>
                        '2026
                    </Grid.Col>
                    <Grid.Col
                        span={3}
                        style={{
                            borderTop: "1px solid var(--mantine-color-white)",
                        }}
                        mt="20px"
                        pb={"5px"}
                    ></Grid.Col>
                    <Grid.Col span={3} p={0}>
                        based in toronto
                    </Grid.Col>
                    <Grid.Col span={3} p={0}>
                        from malaysia
                    </Grid.Col>
                </Grid>
            </Grid.Col>
            <Grid.Col span={5} m="5vh 0 5vh 0" h="80vh" pos={"relative"}>
                <Flex
                    style={{
                        border: "1px solid var(--mantine-color-white)",
                    }}
                    w="100%"
                    h="100%"
                ></Flex>
            </Grid.Col>
            <Grid.Col
                span={8}
                style={{
                    borderBottom: "1px solid var(--mantine-color-white)",
                }}
                p="0"
                mb="5vh"
            ></Grid.Col>
        </Grid>
    );
}
