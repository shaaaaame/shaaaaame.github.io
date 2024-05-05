import React from "react";
import { Flex, Box, Text, Grid } from "@mantine/core";

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
                <Text style={{ fontSize: "50px" }}>RESUME</Text>
            </Box>
            <Box
                w="100%"
                h="70vh"
                style={{ border: "1px solid var(--mantine-color-white)" }}
            >
                <iframe
                    src="https://drive.google.com/file/d/10XX7-1FERjroU8OAjjMkFIwQT_3tvX1r/preview"
                    width={"100%"}
                    height={"100%"}
                    style={{ border: "1px solid var(--mantine-color-white)" }}
                />
            </Box>
        </Flex>
    );
}

export default ResumeMobile;
