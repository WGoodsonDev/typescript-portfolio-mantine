import React from "react";
import { 
    Card, 
    Table, 
    Text
} from "@mantine/core";

export default function ProjectTable() {
    return (
        <Card>
            <br/>
            <Table highlightOnHover>
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
                        <td>SSBM Combo Visualizer</td>
                        <td>Interactive combo visualizer for Super Smash Bros. Melee powered by Slippi. Upload game replay files to the site to help analyze gameplay in an intuitive, visual way.</td>
                        <td>Slippi-js | React | D3 | Express | MongoDB </td>
                        <td>
                            <Text variant="link" component="a" href="http://ssbm-combo-viewer.tech/">Demo</Text>
                            <br/>
                            <Text variant="link" component="a" href="https://github.com/WGoodsonDev/ssbm-combo-visualizer">Source</Text>
                        </td>
                    </tr>
                    <tr>
                        <td>SSU Scheduler</td>
                        <td>Full-stack application for scheduling classes in higher education. Senior Capstone Project at Sonoma State University.</td>
                        <td>React | D3 | MySQL | Koa</td>
                        <td>Proprietary</td>
                    </tr>
                    <tr>
                        <td>Octane</td>
                        <td>Top-down, card-based, bullet hell shoot-em-up game with challenging boss fights. Awarded Winner: Best Gameplay at Sonoma State Tech Showcase by industry professionals from Visual Concepts, developers of the NBA 2K series.</td>
                        <td>Unreal Engine 4 | C++ | Blueprint</td>
                        <td>
                            <Text variant="link" component="a" href="https://github.com/ogre9k/CS330_Final">Source</Text>
                        </td>
                    </tr>
                    <tr>
                        <td>Profile Site</td>
                        <td>Profile website for showing off my skills.</td>
                        <td>React | TypeScript | Mantine UI</td>
                        <td>
                            <Text variant="link" component="a" href="http://warrengoodson.tech/">Demo</Text>
                            <br/>
                            <Text variant="link" component="a" href="https://github.com/WGoodsonDev/typescript-portfolio-mantine">Source</Text>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Card>
    );
}