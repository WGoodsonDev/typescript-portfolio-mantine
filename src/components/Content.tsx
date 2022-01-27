import React from "react";
import {
    Container,
    Grid,
    Card,
    Paper,
    Group,
    Title,
    Text,
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
                <Grid.Col span={10}>

                    <Paper padding="lg">
                        <Group position="apart" style={{ marginBottom: "1rem" }}>
                            <Title order={1}>About Me</Title>
                        </Group>
                        <Card>
                            <Container fluid>
                                <Text>
                                    Hello, and welcome to my portfolio! I'm <Text inherit component="span" variant="gradient"
                                        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>Warren Goodson
                                    </Text>, a CS graduate and full-stack developer based in Oregon. I'm currently seeking an entry-level <Text inherit component="span" variant="gradient"
                                        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>software engineer
                                    </Text> position, so get in contact with me using the link below to let me know you're interested in my skills!
                                </Text>


                            </Container>
                        </Card>
                    </Paper>
                    <Divider style={{ margin: "10px 0px 10px 0px" }} />
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
                    <Divider style={{ margin: "10px 0px 10px 0px" }} />
                    <Paper padding="lg">
                        <Group position="apart" style={{ marginBottom: "1rem" }}>
                            <Title order={1}>Projects</Title>
                        </Group>
                        <ProjectTable />

                    </Paper>



                </Grid.Col>

            </Grid>
        </Container>

    );
}