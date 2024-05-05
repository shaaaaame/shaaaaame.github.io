import { Box, Flex, Grid, Image, Text } from "@mantine/core";
import React, { useRef } from "react";
import { GitHub, Globe } from "react-feather";
import { useScroll, motion, MotionValue } from "framer-motion";
import useParallax from "../utilities/useParallax.tsx";

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
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, -200, 0);

    return (
        <Grid columns={8} ref={ref}>
            <Grid.Col span={4}>
                <Flex align={"flex-start"} gap={"20px"}>
                    <Box
                        w="50px"
                        h="50px"
                        style={{
                            backgroundColor: "var(--mantine-color-black)",
                            aspectRatio: 1,
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
                        <ProjectTag key={e} name={e} />
                    ))}
                </Flex>
            </Grid.Col>
            <Grid.Col span={8} h={"50vh"}>
                <Box
                    style={{
                        border: "1px solid var(--mantine-color-black)",
                        overflow: "hidden",
                    }}
                    h="100%"
                >
                    <motion.div
                        style={{
                            y: y,
                        }}
                    >
                        <Image src={src} alt={title} h={"80vh"} />
                    </motion.div>
                </Box>
            </Grid.Col>
        </Grid>
    );
}

export default ProjectCard;
