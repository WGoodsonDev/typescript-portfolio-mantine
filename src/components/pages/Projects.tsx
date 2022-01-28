import {
    Paper,
    Group,
    Title,
    Grid,
    useMantineTheme
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import ProjectTable from '../ProjectTable';

export default function Projects() {

    const theme = useMantineTheme();
    const largerThanMd = useMediaQuery(`(min-width: ${theme.breakpoints.md}px)`);

    return (
        <Grid
            justify={"center"}
            align={"center"}
            gutter={"xs"}
            style={{ height: "inherit", width: "100%" }}
        >
            <Grid.Col span={largerThanMd ? 6 : 12}>
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