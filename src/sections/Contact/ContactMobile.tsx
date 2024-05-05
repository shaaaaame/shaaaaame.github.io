import React from "react";
import { Flex, Box, Text, Grid, Image, Anchor } from "@mantine/core";

function ContactMobile() {
    return (
        <Flex
            direction={"column"}
            p="20px"
            style={{
                backgroundColor: "var(--mantine-color-white)",
                color: "var(--mantine-color-black)",
            }}
            gap={"50px"}
            h={"100vh"}
            justify={"space-between"}
        >
            <Box
                pb="10px"
                style={{ borderBottom: "1px solid var(--mantine-color-black)" }}
            >
                <Text>04</Text>
                <Text style={{ fontSize: "50px" }}>CONTACT</Text>
            </Box>
            <Flex direction={"column"} gap={"20px"}>
                <Grid
                    style={{
                        borderTop: "1px solid var(--mantine-color-black)",
                    }}
                    gutter={{ base: "20px" }}
                    columns={4}
                >
                    <Grid.Col span={2}>EMAIL</Grid.Col>
                    <Grid.Col span={2}>
                        <Anchor
                            href="mailto:hanxheng@gmail.com"
                            style={{
                                color: "var(--mantine-color-black)",
                            }}
                        >
                            hanxheng@gmail.com
                        </Anchor>
                    </Grid.Col>
                </Grid>
                <Grid
                    style={{
                        borderTop: "1px solid var(--mantine-color-black)",
                    }}
                    gutter={{ base: "20px" }}
                    columns={4}
                >
                    <Grid.Col span={2}>PHONE</Grid.Col>
                    <Grid.Col span={2}>+1 416 768 8441</Grid.Col>
                </Grid>
                <Grid
                    style={{
                        borderTop: "1px solid var(--mantine-color-black)",
                    }}
                    gutter={{ base: "20px" }}
                    columns={4}
                >
                    <Grid.Col span={2}>LINKEDIN</Grid.Col>
                    <Grid.Col span={2}>
                        <Anchor
                            href="https://www.linkedin.com/in/hanxheng/"
                            style={{
                                color: "var(--mantine-color-black)",
                            }}
                        >
                            hanxheng
                        </Anchor>
                    </Grid.Col>
                </Grid>
                <Grid
                    style={{
                        borderTop: "1px solid var(--mantine-color-black)",
                    }}
                    gutter={{ base: "20px" }}
                    columns={4}
                >
                    <Grid.Col span={2}>GITHUB</Grid.Col>
                    <Grid.Col span={2}>
                        <Anchor
                            href="https://github.com/shaaaaame"
                            style={{
                                color: "var(--mantine-color-black)",
                            }}
                        >
                            shaaaaame
                        </Anchor>
                    </Grid.Col>
                </Grid>
            </Flex>
        </Flex>
    );
}

export default ContactMobile;
