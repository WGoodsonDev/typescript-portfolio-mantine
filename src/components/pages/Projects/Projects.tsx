import {
    Paper,
    Group,
    Title,
    Grid,
    useMantineTheme
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import ProjectTable from './ProjectTable';

export default function Projects() {

    const theme = useMantineTheme();
    const largerThanSm = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);

    return (
        <Grid
            justify={"center"}
            align={"center"}
            gutter={"xs"}
            style={{ height: "inherit", width: "100%" }}
        >
            <Grid.Col span={largerThanSm ? 6 : 12}>
                <Paper padding="sm">
                    <Group position="apart" style={{ marginBottom: "1rem" }}>
                        <Title order={1}>Projects</Title>
                    </Group>
                    <ProjectTable />

                </Paper>
            </Grid.Col>


        </Grid>

    );
}