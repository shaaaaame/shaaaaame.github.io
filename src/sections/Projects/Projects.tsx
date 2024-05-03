import "@mantine/core/styles.css";
import { Grid, Text, Box, Flex } from "@mantine/core";
import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import ProjectCard from "./ProjectCard.tsx";

export default function Home() {
    const gutter = {
        base: "20px",
    };
    return (
        <Grid gutter={gutter} columns={8} m="20px 70px 20px 70px">
            <Grid.Col span={8} mt="5vh">
                <Box
                    style={{
                        borderBottom: "1px solid var(--mantine-color-black)",
                    }}
                    w="100%"
                ></Box>
            </Grid.Col>
            <Grid.Col
                span={8}
                style={{ textAlign: "right" }}
                pt="20px"
                pb="20px"
            >
                <Text>02</Text>
                <Text
                    style={{
                        fontSize: "100px",
                        lineHeight: "100px",
                    }}
                >
                    PROJECTS
                </Text>
            </Grid.Col>
            <Grid.Col span={8}>
                <Box
                    style={{
                        borderBottom: "1px solid var(--mantine-color-black)",
                    }}
                    w="100%"
                ></Box>
            </Grid.Col>
            <Grid.Col span={8}>
                <Flex direction="column" gap={"30vh"}>
                    <ProjectCard
                        title="GLAM DE FLEURS"
                        details={{
                            type: "fullstack web application",
                            stack: "react, django, typescript, python",
                            date: "july 2023",
                        }}
                        links={{
                            web: "https://www.glamdefleurs.ca",
                            github: "",
                        }}
                        tags={["UI/UX", "FRONTEND", "BACKEND"]}
                        src="glam.png"
                    />
                    <ProjectCard
                        title="SUBHUB"
                        details={{
                            type: "fullstack web application",
                            stack: "react, django, typescript, python",
                            date: "march 2024",
                        }}
                        links={{
                            web: "",
                            github: "https://github.com/markestiller/SubHub",
                        }}
                        tags={["UI/UX", "FRONTEND"]}
                        src="subhub2.png"
                    />
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
