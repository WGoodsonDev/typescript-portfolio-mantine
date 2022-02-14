import React from "react";
import {
    Card,
    Table,
    Text,
    useMantineTheme
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function ProjectTable() {

    const theme = useMantineTheme();
    const largerThanSm = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);

    return (
        <Card>
            <br />
            <Table highlightOnHover style={{overflowX: "auto"}}>
                <thead>
                    <tr>
                        <th>Project</th>
                        <th>Description</th>
                        <th>Skills Used</th>
                        <th>Link(s)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Text
                                component="span"
                                align="center"
                                variant="gradient"
                                gradient={{ from: 'teal', to: 'blue', deg: 60 }}
                                size="xl"
                                weight={700}
                                style={{ fontFamily: 'Greycliff CF, sans-serif' }}
                            >
                                SSBM Combo Visualizer
                            </Text>
                        </td>
                        <td>Interactive combo visualizer for Super Smash Bros. Melee powered by Slippi. Upload game replay files to the site to help analyze gameplay in an intuitive, visual way.</td>
                        <td>Slippi-js | React | D3 | Express | MongoDB </td>
                        <td>
                            <Text variant="link" component="a" href="http://ssbm-combo-viewer.tech/" target="_blank" rel="noopener noreferrer">Demo</Text>
                            <br />
                            <Text variant="link" component="a" href="https://github.com/WGoodsonDev/ssbm-combo-visualizer" target="_blank" rel="noopener noreferrer">Source</Text>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Text
                                component="span"
                                align="center"
                                variant="gradient"
                                gradient={{ from: 'teal', to: 'blue', deg: 60 }}
                                size="xl"
                                weight={700}
                                style={{ fontFamily: 'Greycliff CF, sans-serif' }}
                            >
                                SSU Scheduler
                            </Text>
                        </td>
                        <td>Full-stack application for scheduling classes in higher education. Responsible for maintaining and updating backend.</td>
                        <td>React | D3 | MySQL | Koa</td>
                        <td>Proprietary</td>
                    </tr>
                    <tr>
                        <td>
                            <Text
                                component="span"
                                align="center"
                                variant="gradient"
                                gradient={{ from: 'teal', to: 'blue', deg: 60 }}
                                size="xl"
                                weight={700}
                                style={{ fontFamily: 'Greycliff CF, sans-serif' }}
                            >
                                Octane
                            </Text>
                        </td>
                        <td>Top-down, card-based, bullet hell shoot-em-up game with challenging boss fights. Awarded Winner: Best Gameplay at Sonoma State Tech Showcase by industry professionals from Visual Concepts, developers of the NBA 2K series.</td>
                        <td>Unreal Engine 4 | C++ | Blueprint</td>
                        <td>
                            <Text variant="link" component="a" href="https://github.com/ogre9k/CS330_Final" target="_blank" rel="noopener noreferrer">Source</Text>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Text
                                component="span"
                                align="center"
                                variant="gradient"
                                gradient={{ from: 'teal', to: 'blue', deg: 60 }}
                                size="xl"
                                weight={700}
                                style={{ fontFamily: 'Greycliff CF, sans-serif' }}
                            >
                                Profile Site
                            </Text>
                        </td>
                        <td>Profile website for showing off my skills.</td>
                        <td>React | TypeScript | Mantine UI</td>
                        <td>
                            <Text variant="link" component="a" href="http://warrengoodson.tech/" target="_blank" rel="noopener noreferrer">Demo</Text>
                            <br />
                            <Text variant="link" component="a" href="https://github.com/WGoodsonDev/typescript-portfolio-mantine" target="_blank" rel="noopener noreferrer">Source</Text>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Card>
    );
}