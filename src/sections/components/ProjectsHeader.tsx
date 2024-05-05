import { Grid, Flex, Box, Text } from "@mantine/core";
import React from "react";
import AnimatedTitle from "./AnimatedTitle.tsx";
import Header from "./Header.tsx";

const gutter = {
    base: "20px",
};

export default function ProjectsHeader() {
    return (
        <Grid
            gutter={gutter}
            columns={8}
            p="20px 70px 0px 70px"
            pos={"sticky"}
            top={"0px"}
            style={{
                backgroundColor: "var(--mantine-color-white)",
                zIndex: 105,
            }}
        >
            <Grid.Col span={8}>
                <Header />
            </Grid.Col>
            <Grid.Col span={8} style={{ textAlign: "right" }} pb="20px">
                <Text>02</Text>
                <AnimatedTitle
                    title={"PROJECTS"}
                    fontSize={"100px"}
                    lineHeight={"100px"}
                    delay={0}
                />
            </Grid.Col>
            <Grid.Col span={8} pb="0">
                <Box
                    style={{
                        borderBottom: "1px solid var(--mantine-color-black)",
                    }}
                    w="100%"
                    h="0"
                ></Box>
            </Grid.Col>
        </Grid>
    );
}
