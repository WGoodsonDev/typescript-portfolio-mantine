import React from "react";
import {
    Container,
    Grid,
    Card,
    Paper,
    Group,
    Title,
    Badge,
    Chips,
    Chip,
    Divider
} from '@mantine/core';
import ProjectTable from "./ProjectTable";

export default function Content() {
    return (
        <Container fluid style={{ margin: '20px' }}>
            <Grid
                justify={"center"}
                align={"center"}
                gutter={"xs"}
                style={{ height: "inherit" }}
            >
                <Grid.Col span={12}>
                    <Paper padding="lg">
                        <Group position="apart" style={{ marginBottom: "1rem" }}>
                            <Title order={1}>Warren&apos;s Tech Stack</Title>
                        </Group>
                        <Card>
                            <Container fluid>
                                <Grid gutter={"sm"}>
                                    <Grid.Col>
                                        <Badge style={{ marginBottom: "12px" }}>
                                            Skill Category 1
                                        </Badge>
                                        <Chips radius="sm" multiple defaultValue={['react']} style={{ display: "flex" }}>
                                            <Chip value="react">React</Chip>
                                            <Chip value="react">React</Chip>
                                            <Chip value="react">React</Chip>
                                            <Chip value="react">React</Chip>
                                        </Chips>
                                        <Divider style={{ margin: "10px 0px 10px 0px" }} />
                                        <Badge style={{ marginBottom: "12px" }}>
                                            Skill Category 2
                                        </Badge>
                                        <Chips radius="sm" multiple defaultValue={['react']} style={{ display: "flex" }}>
                                            <Chip value="react">React</Chip>
                                            <Chip value="react">React</Chip>
                                            <Chip value="react">React</Chip>
                                            <Chip value="react">React</Chip>
                                        </Chips>
                                    </Grid.Col>

                                </Grid>
                            </Container>
                        </Card>
                        <ProjectTable />
                    </Paper>

                </Grid.Col>

            </Grid>
        </Container>

    );
}