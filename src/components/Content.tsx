import React from "react";
import {
    Container,
    Grid,
    Paper,
    Group,
    Title,
    Divider
} from '@mantine/core';
import TechStack from "./pages/TechStack";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { Route, Routes } from 'react-router-dom';

export default function Content() {
    return (
        <Container fluid style={{ margin: '20px', height: 'calc(100vh - 144px)' }}>
            <Grid
                justify={"center"}
                align={"center"}
                gutter={"xs"}
                style={{ height: "inherit" }}
            >
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/tech-stack" element={<TechStack />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </Grid>
        </Container>
    );
}