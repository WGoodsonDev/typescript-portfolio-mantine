import React from "react";
import {
    Container,
    Grid,
    Paper,
    Group,
    Title,
    Divider
} from '@mantine/core';
import TechStack from "./TechStack";
import About from "./About";
import Projects from "./Projects";
import { Route, Routes } from 'react-router-dom';

export default function Content() {
    return (
        <Container fluid style={{ margin: '20px' }}>
            <Grid
                justify={"center"}
                align={"center"}
                gutter={"xs"}
                style={{ height: "inherit" }}
            >
                <Grid.Col span={9}>
                    <Routes>
                        <Route path="/" element={<About />}/>
                        <Route path="/tech-stack" element={<TechStack />}/>
                        <Route path="/projects" element={<Projects />}/>
                    </Routes>
                </Grid.Col>

            </Grid>
        </Container>

    );
}