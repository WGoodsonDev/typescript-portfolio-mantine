import React from "react";
import {
    Group,
    Button,
    Badge,
    Container,
    useMantineTheme,
    Grid,
    Image,
    Tabs,
    Avatar
} from '@mantine/core';
import {
    ExternalLinkIcon,
    GitHubLogoIcon
} from '@radix-ui/react-icons';

export default function Header() {
    const theme = useMantineTheme();

    return (
        <Container fluid style={{
            backgroundColor: theme.colors.gray[4],
        }}>
            <Grid columns={24} justify={'center'} align={'center'} gutter={'sm'}>
                <Grid.Col span={2} style={{ backgroundColor: theme.colors.gray[6] }}>
                    <Avatar
                        alt="Warren Goodson"
                        src="./logo.png"
                    />
                </Grid.Col>
                <Grid.Col span={6} style={{ backgroundColor: theme.colors.gray[5] }}>
                    <Tabs grow variant="default">
                        <Tabs.Tab label="Portfolio" />
                        <Tabs.Tab label="Extra" />
                        <Tabs.Tab label="About Me" />
                    </Tabs>
                </Grid.Col>
                <Grid.Col span={6} offset={10} style={{ backgroundColor: theme.colors.gray[5] }}>
                    <Group style={{ marginLeft: "auto" }}>
                        <Button
                            component="a"
                            href="https://github.com/WGoodsonDev"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="gradient"
                            gradient={{ from: 'blue', to: 'cyan', deg: 60 }}
                            radius="lg"
                            leftIcon={<GitHubLogoIcon width={18} height={18} />}
                            rightIcon={<ExternalLinkIcon width={15} height={15} />}
                        >
                            GitHub
                        </Button>
                        <Button
                            component="a"
                            href="https://www.linkedin.com/in/warren-goodson/"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="gradient"
                            gradient={{ from: 'blue', to: 'cyan', deg: 60 }}
                            radius="lg"
                            rightIcon={<ExternalLinkIcon width={15} height={15} />}
                        >
                            LinkedIn
                        </Button>
                    </Group>


                </Grid.Col>

            </Grid>

        </Container>



    );
}