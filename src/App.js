import { MantineProvider, createTheme, rem } from "@mantine/core";
import "./App.css";
import Home from "./sections/Home/Home.tsx";
import About from "./sections/About/About.tsx";
import Projects from "./sections/Projects/Projects.tsx";
import Resume from "./sections/Resume/Resume.tsx";
import Contact from "./sections/Contact/Contact.tsx";
import { useEffect, useRef, useState } from "react";
import HomeMobile from "./sections/Home/HomeMobile.tsx";
import { useMediaQuery } from "@mantine/hooks";
import AboutMobile from "./sections/About/AboutMobile.tsx";
import ProjectsMobile from "./sections/Projects/ProjectsMobile.tsx";
import ResumeMobile from "./sections/Resume/ResumeMobile.tsx";
import ContactMobile from "./sections/Contact/ContactMobile.tsx";
import Loading from "./sections/components/Loading.tsx";
import { AnimatePresence, motion } from "framer-motion";
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

    const isMobile = useMediaQuery("(max-width: 1020px)");
    const [loading, setLoading] = useState(false);

    const home = useRef(null);
    const about = useRef(null);
    const projects = useRef(null);
    const resume = useRef(null);
    const contact = useRef(null);

    const sticky = isMobile
        ? {
              position: "sticky",
              top: "0",
          }
        : {};

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <MantineProvider theme={theme}>
            <AnimatePresence>
                {loading && (
                    <motion.div
                        style={{
                            width: "100vw",
                            height: "100vh",
                            zIndex: 200,
                            position: "absolute",
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            ease: "easeIn",
                            duration: 0.4,
                        }}
                    >
                        {loading && <Loading />}
                    </motion.div>
                )}
            </AnimatePresence>
            <div
                className="main"
                style={
                    loading
                        ? {
                              display: "none",
                          }
                        : {
                              display: "contents",
                          }
                }
            >
                <div
                    ref={home}
                    style={{
                        zIndex: 100,
                        position: "sticky",
                        top: 0,
                        ...sticky,
                    }}
                >
                    {isMobile ? (
                        <HomeMobile
                            about={about}
                            projects={projects}
                            resume={resume}
                            contact={contact}
                        />
                    ) : (
                        <Home
                            about={about}
                            projects={projects}
                            resume={resume}
                            contact={contact}
                        />
                    )}
                </div>
                <div
                    ref={about}
                    style={{
                        zIndex: 102,
                        position: "sticky",
                        top: "0",
                        ...sticky,
                    }}
                >
                    {isMobile ? <AboutMobile /> : <About />}
                </div>

                <div
                    ref={projects}
                    style={{
                        zIndex: 103,
                        position: "relative",
                    }}
                >
                    {isMobile ? <ProjectsMobile /> : <Projects />}
                </div>
                <div
                    ref={resume}
                    style={{
                        position: "sticky",
                        top: "0",
                        zIndex: 104,
                    }}
                >
                    {isMobile ? <ResumeMobile /> : <Resume />}
                </div>
                <div
                    ref={contact}
                    style={{
                        zIndex: 105,
                        position: "relative",
                    }}
                >
                    {isMobile ? <ContactMobile /> : <Contact />}
                </div>
            </div>
        </MantineProvider>
    );
}

export default App;
