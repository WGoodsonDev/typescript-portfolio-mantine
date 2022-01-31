import React, { useState } from "react";
import {
    Group,
    Button,
    Burger,
    useMantineTheme,
    Avatar,
    MediaQuery,
    Collapse,
    Paper
} from '@mantine/core';
import {
    ExternalLinkIcon,
    GitHubLogoIcon
} from '@radix-ui/react-icons';
import NavButtons from "./NavButtons";
import { useMediaQuery } from "@mantine/hooks";

export default function Header() {

    const [burgerOpened, setBurgerOpened] = useState(false);
    const theme = useMantineTheme();
    const largerThanSm = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);

    return (
        <>
            <div style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                backgroundColor: theme.colors.gray[4],
                zIndex: 0
            }}>
                <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
                    <Burger
                        opened={burgerOpened}
                        onClick={() => setBurgerOpened((openedState) => !openedState)}
                        size={"sm"}
                        color={theme.colors.gray[6]}
                        mr={"xl"}
                    />
                </MediaQuery>
                <div style={{ marginRight: "20px" }}>
                    <Avatar alt="Warren Goodson" src="./logo.png" />
                </div>

                <MediaQuery smallerThan={"sm"} styles={{ display: "none" }}>
                    <Group>
                        <NavButtons orientation="horizontal" />
                    </Group>
                </MediaQuery>

                <Group style={{ marginLeft: "auto" }}>
                    <Button
                        size={largerThanSm ? "sm" : "xs"}
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
                        size={largerThanSm ? "sm" : "xs"}
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
            </div>
            {burgerOpened && (
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Collapse in={burgerOpened}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                height: "100%",
                                width: "120%",
                            }}
                        >
                            <Paper
                                padding="md"
                                shadow="xs"
                                style={{
                                    width: "100%",
                                    zIndex: 2,
                                    marginLeft: "-20px",
                                    marginTop: "10px",
                                }}
                            >
                                <Group
                                    key={"burgerGroup"}
                                    direction="column"
                                    style={{ marginLeft: "10px", zIndex: 100 }}
                                >
                                    <NavButtons orientation="vertical" />
                                </Group>
                            </Paper>
                        </div>
                    </Collapse>
                </MediaQuery>
            )}
        </>





    );
}