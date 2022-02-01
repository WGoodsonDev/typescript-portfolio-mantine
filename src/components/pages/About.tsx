import React from "react";
import {
    Card,
    Container,
    Group,
    Paper,
    Title,
    Text,
    Grid,
    Center,
    useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from "@mantine/hooks";


export default function About() {

    const theme = useMantineTheme();
    const largerThanSm = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);

    return (
        <Center>
            <Grid
                columns={24}
                justify={"center"}
                align={"center"}
                gutter={"xs"}
                style={{
                    height: "inherit",
                    width: "100%"
                }}
            >
                <Grid.Col offset={0} span={largerThanSm ? 10 : 24}>
                    <svg viewBox="0 0 64 40" height={"300"} width={largerThanSm ? "640" : "240"}>
                        <text x={"0"} y={"15"} fill={"black"} fontWeight={"400"}>
                            <tspan>Warren</tspan><tspan x={"0"} y={"34"}>Goodson</tspan>
                        </text>
                    </svg>
                </Grid.Col>
                <Grid.Col span={largerThanSm ? 8 : 24}>
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
                </Grid.Col>
                <Grid.Col span={2} />
            </Grid>
        </Center>
    );
}