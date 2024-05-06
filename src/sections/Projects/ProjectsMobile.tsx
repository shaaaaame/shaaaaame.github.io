import React from "react";
import { Flex, Box, Text, Grid, Image } from "@mantine/core";
import { GitHub, Globe } from "react-feather";
import AnimatedTitle from "../components/AnimatedTitle.tsx";

function ProjectTag({ name }) {
    return (
        <Box
            p="0 10px 0 10px"
            h="30px"
            style={{
                borderRadius: "20px",
                border: "1px solid var(--mantine-color-black)",
            }}
        >
            <Flex justify={"center"} align={"center"} w="100%" h="100%">
                {name}
            </Flex>
        </Box>
    );
}

const ProjectMobileCard = ({ title, details, tags, links, src }) => {
    return (
        <Flex
            direction={"column"}
            gap={"20px"}
            pb="10px"
            style={{ borderBottom: "1px solid var(--mantine-color-black)" }}
        >
            <Flex gap={"10px"}>
                <Box
                    style={{
                        backgroundColor: "var(--mantine-color-black)",
                        aspectRatio: 1,
                        width: "25px",
                    }}
                ></Box>
                <Text style={{ fontSize: "25px", lineHeight: "25px" }}>
                    {title}
                </Text>
            </Flex>
            <Flex gap={"10px"}>
                {tags.map((t) => (
                    <ProjectTag name={t} />
                ))}
            </Flex>
            <Image
                src={src}
                w="100%"
                style={{
                    aspectRatio: 1,
                    border: "1px solid var(--mantine-color-black)",
                }}
                alt={title}
            />
            <Grid columns={4} gutter={{ base: "20px" }}>
                <Grid.Col span={3}>{details.type}</Grid.Col>
                <Grid.Col span={1}>{details.date}</Grid.Col>
                <Grid.Col span={3}>{details.stack}</Grid.Col>
                <Grid.Col span={1}>
                    {links.web ? (
                        <a
                            href={links.web}
                            aria-label={`Link to ${title} page`}
                        >
                            <Globe
                                style={{
                                    textDecoration: "none",
                                    color: "var(--mantine-color-black)",
                                }}
                            />
                        </a>
                    ) : (
                        ""
                    )}
                    {links.github ? (
                        <a
                            href={links.github}
                            aria-label={`Link to ${title} GitHub`}
                        >
                            <GitHub
                                style={{
                                    textDecoration: "none",
                                    color: "var(--mantine-color-black)",
                                }}
                            />
                        </a>
                    ) : (
                        ""
                    )}
                </Grid.Col>
            </Grid>
        </Flex>
    );
};

function ProjectsMobile() {
    return (
        <Flex
            direction={"column"}
            p="20px"
            style={{
                backgroundColor: "var(--mantine-color-white)",
                color: "var(--mantine-color-black)",
            }}
            gap={"50px"}
        >
            <Box
                pt="20px"
                pb="10px"
                style={{
                    borderBottom: "1px solid var(--mantine-color-black)",
                    backgroundColor: "var(--mantine-color-white)",
                }}
                pos={"sticky"}
                top={"0"}
            >
                <Text>03</Text>
                <AnimatedTitle
                    fontSize={"50px"}
                    lineHeight={"50px"}
                    delay={0}
                    title={"PROJECTS"}
                />
            </Box>
            <ProjectMobileCard
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
            <ProjectMobileCard
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
    );
}

export default ProjectsMobile;
