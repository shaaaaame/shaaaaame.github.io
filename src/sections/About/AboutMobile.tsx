import React from "react";
import { Flex, Box, Text, Grid } from "@mantine/core";

function AboutMobile() {
    return (
        <Flex
            direction={"column"}
            p="20px"
            style={{
                backgroundColor: "var(--mantine-color-black)",
                color: "var(--mantine-color-white)",
            }}
            h="100vh"
            mb="20vh"
            gap={"50px"}
        >
            <Box>
                <Text>01</Text>
                <Text style={{ fontSize: "50px" }}>ABOUT</Text>
            </Box>
            <Box
                w="100%"
                h="50vh"
                style={{ border: "1px solid var(--mantine-color-white)" }}
            ></Box>
            <Flex w="100%" direction={"column"} gap={"30px"}>
                <Grid
                    columns={4}
                    gutter={{ base: "10px" }}
                    style={{
                        borderTop: "1px solid var(--mantine-color-white)",
                    }}
                >
                    <Grid.Col span={2}>computer science student</Grid.Col>
                    <Grid.Col span={2}>university of toronto '2026</Grid.Col>
                    <Grid.Col span={2}>frontend developer</Grid.Col>
                </Grid>
                <Grid
                    columns={4}
                    gutter={{ base: "10px" }}
                    style={{
                        borderTop: "1px solid var(--mantine-color-white)",
                    }}
                >
                    <Grid.Col span={2}>based in toronto</Grid.Col>
                    <Grid.Col span={2}>from malaysia</Grid.Col>
                </Grid>
            </Flex>
        </Flex>
    );
}

export default AboutMobile;
