import { MantineProvider, createTheme, rem } from "@mantine/core";
import "./App.css";
import Home from "./sections/Home/Home.tsx";
import About from "./sections/About/About.tsx";
import Projects from "./sections/Projects/Projects.tsx";
import Resume from "./sections/Resume/Resume.tsx";
import Contact from "./sections/Contact/Contact.tsx";
import { useRef } from "react";
import AboutTransition from "./sections/About/AboutTransition.tsx";
import HomeMobile from "./sections/Home/HomeMobile.tsx";
import { useMediaQuery } from "@mantine/hooks";
import AboutMobile from "./sections/About/AboutMobile.tsx";
import ProjectsMobile from "./sections/Projects/ProjectsMobile.tsx";
import ResumeMobile from "./sections/Resume/ResumeMobile.tsx";
import ContactMobile from "./sections/Contact/ContactMobile.tsx";
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

    const isMobile = useMediaQuery("(max-width: 780px)");

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

    return (
        <MantineProvider theme={theme}>
            <div className="main">
                <div ref={home} style={{ zIndex: 100, ...sticky }}>
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
                {!isMobile && (
                    <div style={{ zIndex: 101, position: "relative" }}>
                        <AboutTransition />
                    </div>
                )}

                <div
                    ref={about}
                    style={{
                        zIndex: 102,
                        position: "relative",
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
