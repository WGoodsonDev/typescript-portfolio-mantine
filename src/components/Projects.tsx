import {
    Paper,
    Group,
    Title
} from '@mantine/core';
import ProjectTable from './ProjectTable';

export default function Projects() {
    return (
        <Paper padding="lg">
            <Group position="apart" style={{ marginBottom: "1rem" }}>
                <Title order={1}>Projects</Title>
            </Group>
            <ProjectTable />

        </Paper>
    );
}