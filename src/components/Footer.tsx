import React from "react";
import { Grid, Text, Button, useMantineTheme, Container } from '@mantine/core';

export default function Footer() {

    const theme = useMantineTheme();

    return (
        <Container fluid>
            <Grid justify='center' style={{ backgroundColor: theme.colors.gray[4] }}>
                <Grid.Col span={6}>
                    <Text size="xl" weight={700} color="black" style={{ marginBottom: 20 }}>Footer text big</Text>
                    <Text color="black" style={{ marginBottom: 20 }}>
                        This is text inside the footer
                    </Text>
                    <Button variant="white">Check out Mantine</Button>
                </Grid.Col>
            </Grid>
        </Container>
    );
}