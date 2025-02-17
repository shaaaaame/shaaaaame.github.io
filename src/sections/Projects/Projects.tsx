import "@mantine/core/styles.css";
import { Grid, Text, Box, Flex } from "@mantine/core";
import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard.tsx";
import ProjectsHeader from "../components/ProjectsHeader.tsx";

const gutter = {
    base: "20px",
};

export default function Projects() {
    return (
        <>
            <ProjectsHeader />
            <Grid
                gutter={gutter}
                columns={8}
                p="150px 70px 20px 70px"
                style={{
                    backgroundColor: "var(--mantine-color-white)",
                }}
            >
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
                            src="glam2.png"
                        />
                        <ProjectCard
                            title="SUBHUB"
                            details={{
                                type: "fullstack web application",
                                stack: "react, chakra, express, typescript",
                                date: "march 2024",
                            }}
                            links={{
                                web: "",
                                github: "https://github.com/markestiller/SubHub",
                            }}
                            tags={["UI/UX", "FRONTEND"]}
                            src="subhub2.png"
                        />
                        <ProjectCard
                            title="HYDRANT"
                            details={{
                                type: "fullstack web application",
                                stack: "aws, react, shadcn, nest, typescript",
                                date: "jan 2025",
                            }}
                            links={{
                                web: "https://hydrantinc.co",
                                github: "https://github.com/shaaaaame/hydrant",
                            }}
                            tags={["UI/UX", "FRONTEND", "BACKEND", "ML"]}
                            src="hydrant.png"
                        />
                    </Flex>
                </Grid.Col>
                <Grid.Col span={8} mb="5vh">
                    <Box
                        style={{
                            borderBottom:
                                "1px solid var(--mantine-color-black)",
                        }}
                        w="100%"
                    ></Box>
                </Grid.Col>
            </Grid>
        </>
    );
}
