import React from "react";
import { Container, Grid, Card } from '@mantine/core';

export default function Content() {
    return (
        <Container fluid style={{ margin: '20px' }}>
            <Grid justify={'center'}>
                <Grid.Col span={6}>
                    <Card>

                    </Card>
                </Grid.Col>

            </Grid>
        </Container>

    );
}