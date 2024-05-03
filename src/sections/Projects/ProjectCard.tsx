import { Box, Flex, Grid, Image, Text } from "@mantine/core";
import { space } from "postcss/lib/list";
import React from "react";
import { GitHub, Globe } from "react-feather";

function ProjectTag({ name }) {
    return (
        <Box
            p="0 20px 0 20px"
            h="40px"
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

function ProjectCard({ title, details, tags, links, src }) {
    return (
        <Grid columns={8}>
            <Grid.Col span={4}>
                <Flex align={"flex-start"} gap={"20px"}>
                    <Box
                        w="50px"
                        h="50px"
                        style={{
                            backgroundColor: "var(--mantine-color-black)",
                        }}
                    ></Box>
                    <Text style={{ fontSize: "50px", lineHeight: "50px" }}>
                        {title}
                    </Text>
                </Flex>
            </Grid.Col>
            <Grid.Col span={1} pr="30px">
                <Text>{details.type}</Text>
            </Grid.Col>
            <Grid.Col span={1} pr="30px">
                <Text>{details.stack}</Text>
            </Grid.Col>
            <Grid.Col span={1} pr="30px">
                <Text>{details.date}</Text>
            </Grid.Col>
            <Grid.Col span={1} pr="30px">
                <Text>
                    {links.web ? (
                        <a href={links.web}>
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
                </Text>
                <Text>
                    {links.github ? (
                        <a href={links.github}>
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
                </Text>
            </Grid.Col>
            <Grid.Col span={8}>
                <Flex gap={"20px"}>
                    {tags.map((e) => (
                        <ProjectTag name={e} />
                    ))}
                </Flex>
            </Grid.Col>
            <Grid.Col span={8}>
                <Image
                    src={src}
                    alt={title}
                    h={"50vh"}
                    style={{ border: "1px solid var(--mantine-color-black)" }}
                />
            </Grid.Col>
        </Grid>
    );
}

export default ProjectCard;
