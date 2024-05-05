import { MantineProvider, createTheme, rem } from "@mantine/core";
import "./App.css";
import Home from "./sections/Home/Home.tsx";
import About from "./sections/About/About.tsx";
import Projects from "./sections/Projects/Projects.tsx";
import Resume from "./sections/Resume/Resume.tsx";
import Contact from "./sections/Contact/Contact.tsx";
import { useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import AboutTransition from "./sections/About/AboutTransition.tsx";

function App() {
    const theme = createTheme({
        fontFamily: "Inter, sans-serif",
        fontSizes: {
            xs: "10px",
            md: "12px",
            lg: "15px",
        },
        white: "#E8F7FE",
        black: "#534F46",
    });

    const home = useRef(null);
    const about = useRef(null);
    const projects = useRef(null);
    const resume = useRef(null);
    const contact = useRef(null);

    return (
        <MantineProvider theme={theme}>
            <div className="main">
                <div ref={home} style={{ zIndex: 100 }}>
                    <Home
                        about={about}
                        projects={projects}
                        resume={resume}
                        contact={contact}
                    />
                </div>
                <div style={{ zIndex: 101, position: "relative" }}>
                    <AboutTransition />
                </div>
                <div
                    ref={about}
                    style={{
                        zIndex: 102,
                        position: "relative",
                    }}
                >
                    <About />
                </div>

                <div ref={projects}>
                    <Projects />
                </div>
                <div
                    ref={resume}
                    style={{
                        position: "sticky",
                        top: "0",
                        zIndex: 104,
                    }}
                >
                    <Resume />
                </div>
                <div
                    ref={contact}
                    style={{
                        zIndex: 105,
                        position: "relative",
                        borderTop: "1px solid var(--mantine-color-black)",
                    }}
                >
                    <Contact />
                </div>
            </div>
        </MantineProvider>
    );
}

export default App;
