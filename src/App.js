import { MantineProvider, createTheme, rem } from "@mantine/core";
import "./App.css";
import Home from "./sections/Home/Home.tsx";
import About from "./sections/About/About.tsx";
import Projects from "./sections/Projects/Projects.tsx";

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

    return (
        <MantineProvider theme={theme}>
            <div className="main">
                <Home />
                <About />
                <Projects />
            </div>
        </MantineProvider>
    );
}

export default App;
