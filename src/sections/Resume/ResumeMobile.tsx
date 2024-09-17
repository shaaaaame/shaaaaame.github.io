import React from "react";
import { Flex, Box, Text, Grid } from "@mantine/core";
import AnimatedTitle from "../components/AnimatedTitle.tsx";
function ResumeMobile() {
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
                <Text>03</Text>
                <AnimatedTitle
                    fontSize={"50px"}
                    lineHeight={"50px"}
                    delay={0}
                    title={"RESUME"}
                />{" "}
            </Box>
            <Box
                w="100%"
                h="70vh"
                style={{ border: "1px solid var(--mantine-color-white)" }}
            >
                <iframe
                    title="resume"
                    src="https://drive.google.com/file/d/11cX_KEUnLHjfXrXK-AK5Pff02GVSXLe1/preview"
                    width={"100%"}
                    height={"100%"}
                    style={{ border: "1px solid var(--mantine-color-white)" }}
                />
            </Box>
        </Flex>
    );
}

export default ResumeMobile;
