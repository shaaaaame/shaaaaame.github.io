import {
    Divider,
    Grid,
    Title,
    Container,
    Flex,
    Text,
    Box,
} from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import NavSection from "./NavSection.tsx";

export default function Home() {
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
        >
            <Grid.Col span={8}>
                <Grid
                    gutter={gutter}
                    style={{
                        borderBottom: "1px solid #534F46",
                        paddingBottom: "5px",
                    }}
                    columns={8}
                >
                    <Grid.Col span={6}>HAN XHENG CHEW</Grid.Col>
                    <Grid.Col span={1}>portfolio</Grid.Col>
                    <Grid.Col span={1}>2024</Grid.Col>
                </Grid>
            </Grid.Col>
            <Grid.Col span={8}>
                <Text
                    style={{
                        fontSize: "150px",
                        lineHeight: "175px",
                    }}
                    ml="-12px"
                >
                    HAN XHENG
                </Text>
            </Grid.Col>
            <Grid.Col span={6}>
                <Text
                    style={{
                        fontSize: "150px",
                        lineHeight: "175px",
                    }}
                    ml="-12px"
                >
                    CHEW
                </Text>
            </Grid.Col>
            <Grid.Col span={2} mt="50px">
                <p>(building great software</p>
                <p>with great people.)</p>
            </Grid.Col>
            <Grid.Col span={2}>
                <NavSection numberString={"01"} name="about" />
            </Grid.Col>
            <Grid.Col span={2}>
                <NavSection numberString={"02"} name="projects" />
            </Grid.Col>
            <Grid.Col span={2}>
                <NavSection numberString={"03"} name="resume" />
            </Grid.Col>
            <Grid.Col span={2}>
                <NavSection numberString={"04"} name="contact" />
            </Grid.Col>
        </Grid>
    );
}
