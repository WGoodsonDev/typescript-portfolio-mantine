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
    Transition
} from '@mantine/core';
import { useMediaQuery } from "@mantine/hooks";
import { useLocation } from 'react-router-dom';

const transition = {
    in: { opacity: 1, transform: 'scaleY(1)' },
    out: { opacity: 0, transform: 'scaleY(0)' },
    transitionProperty: 'opacity, transform'
}

export default function About() {

    let location = useLocation();

    const theme = useMantineTheme();
    const largerThanMd = useMediaQuery(`(min-width: ${theme.breakpoints.md}px)`);

    return (
        <Center>
            <Transition mounted={location.pathname === '/'}  transition={transition} duration={1000} timingFunction="ease">
                {(styles) => (
                    <Grid
                    columns={24}
                    justify={"center"}
                    align={"center"}
                    gutter={"xs"}
                    style={{ 
                        height: "inherit",
                        width: "100%",
                        ...styles 
                    }}
                >
                    <Grid.Col offset={0} span={largerThanMd ? 10 : 6}>
                        <svg viewBox="0 0 64 40" height={"300"} width={largerThanMd ? "640" : "240"}>
                            <text x={"0"} y={"15"} fill={"white"}><tspan>Warren</tspan><tspan x={"0"} y={"34"}>Goodson</tspan></text>
                        </svg>
                    </Grid.Col>
                    <Grid.Col span={largerThanMd ? 8 : 10}>
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
                )

                }
                
            </Transition>
        </Center>

        





    );
}