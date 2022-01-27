import React from "react";
import {
    Container,
    Grid,
    Paper,
    Group,
    Title,
    Divider
} from '@mantine/core';
import ProjectTable from "./ProjectTable";
import TechStack from "./TechStack";
import About from "./About";
import Projects from "./Projects";

export default function Content() {
    return (
        <Container fluid style={{ margin: '20px' }}>
            <Grid
                justify={"center"}
                align={"center"}
                gutter={"xs"}
                style={{ height: "inherit" }}
            >
                <Grid.Col span={6}>
                    <About />
                    <Divider style={{ margin: "10px 0px 10px 0px" }} />
                    <TechStack />
                    <Divider style={{ margin: "10px 0px 10px 0px" }} />
                    <Projects />
                </Grid.Col>

            </Grid>
        </Container>

    );
}