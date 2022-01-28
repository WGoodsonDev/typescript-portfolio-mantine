import {
    Paper,
    Group,
    Title,
    Grid
} from '@mantine/core';
import ProjectTable from '../ProjectTable';

export default function Projects() {
    return (
        <Grid
            justify={"center"}
            align={"center"}
            gutter={"xs"}
            style={{ height: "inherit", width: "100%" }}
        >
            <Grid.Col span={6}>
                <Paper padding="lg">
                    <Group position="apart" style={{ marginBottom: "1rem" }}>
                        <Title order={1}>Projects</Title>
                    </Group>
                    <ProjectTable />

                </Paper>
            </Grid.Col>


        </Grid>

    );
}