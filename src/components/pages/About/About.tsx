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
    const smallerThanLg = useMediaQuery(`(max-width: ${theme.breakpoints.lg}px)`);

    let svgWidth;
    if(largerThanSm && smallerThanLg) svgWidth = "400";
    else if(largerThanSm) svgWidth = "640";
    else svgWidth = "240";

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
                    <svg
                        viewBox="0 0 64 40"
                        height={"300"}
                        width={svgWidth}>
                        <defs>
                            <linearGradient id="tealBlueGradient" gradientTransform="rotate(0)">
                                <stop offset="5%" stop-color="#20C997" />
                                <stop offset="95%" stop-color="#339AF0" />
                            </linearGradient>
                        </defs>
                        <text x={"0"} y={"15"} fill={"url('#tealBlueGradient')"} fontWeight={"400"} fontFamily={"Roboto, sans-serif"}>
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
                                        gradient={{ from: 'teal', to: 'blue', deg: 45 }}>Warren Goodson
                                    </Text>, a CS graduate and full-stack developer based in Oregon. I'm currently seeking a junior-level <Text inherit component="span" variant="gradient"
                                        gradient={{ from: 'teal', to: 'blue', deg: 45 }}>software engineer
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