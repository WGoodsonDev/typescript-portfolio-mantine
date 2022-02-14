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
    Divider,
    useMantineTheme
} from '@mantine/core';
import { useMediaQuery } from "@mantine/hooks";

export default function TechStack() {

    const theme = useMantineTheme();
    const largerThanSm = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);

    const chipSize = largerThanSm ? "md" : "xs";

    return (

        <Grid
            justify={"center"}
            align={"center"}
            gutter={"xs"}
            style={{ height: "inherit", width: "100%" }}
        >
            <Grid.Col span={largerThanSm ? 6 : 12}>
                <Paper padding="lg">
                    <Group position="apart" style={{ marginBottom: "1rem" }}>
                        <Title order={1}>Tech Stack</Title>
                    </Group>
                    <Card>
                        <Container fluid>
                            <Grid>
                                <Grid.Col span={12}>
                                    <Badge size="xl"
                                        variant={"gradient"}
                                        gradient={{ from: "teal", to: "blue" }}
                                        style={{ marginBottom: "12px" }}>
                                        Frontend Tech
                                    </Badge>
                                    <Chips color={"teal"} size={chipSize} radius="md" defaultValue={['checked']} style={{ display: "flex" }}>
                                        <Chip value="checked">React.js</Chip>
                                        <Chip value="checked">HTML5</Chip>
                                        <Chip value="checked">CSS3</Chip>
                                        <Chip value="checked">SASS/LESS</Chip>
                                        <Chip value="checked">MVC</Chip>

                                    </Chips>
                                    <Divider style={{ margin: "10px 0px 10px 0px" }} />
                                    <Badge size="xl"
                                        variant={"gradient"}
                                        gradient={{ from: "teal", to: "blue" }}
                                        style={{ marginBottom: "12px" }}>
                                        Backend Tech
                                    </Badge>
                                    <Chips size={chipSize} radius="md" defaultValue={['checked']} style={{ display: "flex" }}>
                                        <Chip value="checked">Node.js</Chip>
                                        <Chip value="checked">Express.js</Chip>
                                        <Chip value="checked">ASP.NET</Chip>
                                        <Chip value="checked">REST API</Chip>
                                        <Chip value="checked">MySQL</Chip>
                                        <Chip value="checked">MongoDB</Chip>
                                    </Chips>
                                    <Divider style={{ margin: "10px 0px 10px 0px" }} />
                                    <Badge size="xl"
                                        variant={"gradient"}
                                        gradient={{ from: "teal", to: "blue" }}
                                        style={{ marginBottom: "12px" }}>
                                        Languages
                                    </Badge>
                                    <Chips color={"teal"} size={chipSize} radius="md" defaultValue={['checked']} style={{ display: "flex" }}>
                                        <Chip value="checked">JavaScript</Chip>
                                        <Chip value="checked">TypeScript</Chip>
                                        <Chip value="checked">C/C++</Chip>
                                        <Chip value="checked">C#</Chip>
                                        <Chip value="checked">Python</Chip>
                                    </Chips>
                                    <Divider style={{ margin: "10px 0px 10px 0px" }} />
                                    <Badge size="xl"
                                        variant={"gradient"}
                                        gradient={{ from: "teal", to: "blue" }}
                                        style={{ marginBottom: "12px" }}>
                                        Tools
                                    </Badge>
                                    <Chips size={chipSize} radius="md" defaultValue={['checked']} style={{ display: "flex" }}>
                                        <Chip value="checked">GitHub</Chip>
                                        <Chip value="checked">Docker</Chip>
                                        <Chip value="checked">Linux</Chip>
                                    </Chips>
                                </Grid.Col>
                            </Grid>
                        </Container>
                    </Card>

                </Paper>
            </Grid.Col>
        </Grid>

    )
}