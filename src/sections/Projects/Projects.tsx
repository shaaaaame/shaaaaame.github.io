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
            <Grid gutter={gutter} columns={8} m="150px 70px 20px 70px">
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
