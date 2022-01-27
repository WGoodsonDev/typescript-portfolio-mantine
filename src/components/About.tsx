import React from "react";
import {
    Card,
    Container,
    Group,
    Paper,
    Title,
    Text
} from '@mantine/core';

export default function About() {
    return (
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
    );
}