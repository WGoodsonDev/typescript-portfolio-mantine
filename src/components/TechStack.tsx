import React from "react";
import {
    Container,
    Grid,
    Group,
    Title,
    Paper,
    Card,
    Badge,
    Chips,
    Chip,
    Divider
} from '@mantine/core';

export default function TechStack(){
    return (
        <Paper padding="lg">
                        <Group position="apart" style={{ marginBottom: "1rem" }}>
                            <Title order={1}>Tech Stack</Title>
                        </Group>
                        <Card style={{ marginBottom: "20px" }}>
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

                    </Paper>
    )
}