import { Flex, Box, Text } from "@mantine/core";
import React from "react";
import AnimatedTitle from "../components/AnimatedTitle.tsx";
import Header from "../components/Header.tsx";

function HomeMobile({ about, projects, resume, contact }) {
    return (
        <Flex
            direction={"column"}
            justify={"space-between"}
            h={"95vh"}
            mb="20vh"
            p="20px 20px 20px 20px"
        >
            <Header />
            <Box>
                <AnimatedTitle
                    title={"HAN"}
                    fontSize="75px"
                    lineHeight={"75px"}
                    delay={0}
                />
                <AnimatedTitle
                    title={"XHENG"}
                    fontSize="75px"
                    lineHeight={"75px"}
                    delay={0.1}
                />
                <AnimatedTitle
                    title={"CHEW"}
                    fontSize="75px"
                    lineHeight={"75px"}
                    delay={0.2}
                />
            </Box>
            <Box
                style={{
                    borderBottom: "1px solid var(--mantine-color-black)",
                }}
                pb={"10px"}
            >
                <Text
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                        about.current.scrollIntoView({ behavior: "smooth" })
                    }
                >
                    01 - about
                </Text>
                <Text
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                        projects.current.scrollIntoView({ behavior: "smooth" })
                    }
                >
                    02 - projects
                </Text>
                <Text
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                        resume.current.scrollIntoView({ behavior: "smooth" })
                    }
                >
                    03 - resume
                </Text>
                <Text
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                        contact.current.scrollIntoView({ behavior: "smooth" })
                    }
                >
                    04 - contact
                </Text>
            </Box>
        </Flex>
    );
}

export default HomeMobile;
