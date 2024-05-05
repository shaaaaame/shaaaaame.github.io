import { Grid, Flex, Text, Box } from "@mantine/core";
import "@mantine/core/styles.css";
import React, { useRef } from "react";
import "./Home.css";
import NavSection from "./NavSection.tsx";
import AnimatedTitle from "../components/AnimatedTitle.tsx";
import { motion, useInView } from "framer-motion";
import Header from "../components/Header.tsx";

export default function Home({ about, projects, resume, contact }) {
    const gutter = {
        base: "20px",
    };

    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "20px 70px 20px 70px",
            }}
        >
            <Grid gutter={gutter} columns={8} w="100%">
                <Grid.Col span={8}>
                    <Header />
                </Grid.Col>
                <Grid.Col span={8}>
                    <Text ml="-12px">
                        <AnimatedTitle
                            title={"HAN XHENG"}
                            fontSize={"150px"}
                            lineHeight={"175px"}
                            delay={0}
                        />
                    </Text>
                </Grid.Col>
                <Grid.Col span={6}>
                    <Text ml="-12px">
                        <AnimatedTitle
                            title={"CHEW"}
                            fontSize={"150px"}
                            lineHeight={"175px"}
                            delay={0.2}
                        />
                    </Text>
                </Grid.Col>
                <Grid.Col span={2} mt="50px">
                    <p>(building great software</p>
                    <p>with great people.)</p>
                </Grid.Col>
            </Grid>
            <Grid columns={8} gutter={gutter} w="100%">
                <Grid.Col
                    span={2}
                    onClick={() =>
                        about.current.scrollIntoView({ behavior: "smooth" })
                    }
                >
                    <NavSection numberString={"01"} name="about" />
                </Grid.Col>
                <Grid.Col
                    span={2}
                    onClick={() =>
                        projects.current.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                >
                    <NavSection numberString={"02"} name="projects" />
                </Grid.Col>
                <Grid.Col
                    span={2}
                    onClick={() =>
                        resume.current.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                >
                    <NavSection numberString={"03"} name="resume" />
                </Grid.Col>
                <Grid.Col
                    span={2}
                    onClick={() =>
                        contact.current.scrollIntoView({
                            behavior: "smooth",
                        })
                    }
                >
                    <NavSection numberString={"04"} name="contact" />
                </Grid.Col>
            </Grid>
        </div>
    );
}
