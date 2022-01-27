import React, { useState } from "react";
import {
    Group,
    Button,
    Burger,
    useMantineTheme,
    Avatar,
    MediaQuery
} from '@mantine/core';
import {
    ExternalLinkIcon,
    GitHubLogoIcon
} from '@radix-ui/react-icons';
import NavButtons from "./NavButtons";

export default function Header() {

    const [burgerOpened, setBurgerOpened] = useState(false);

    const theme = useMantineTheme();

    return (
        <>
            <div style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: theme.colors.gray[4]
            }}>
                <MediaQuery largerThan={"sm"} styles={{display: "none"}}>
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

                <MediaQuery smallerThan={"sm"} styles={{display: "none"}}>
                    <Group>
                        <NavButtons />  
                    </Group>
                </MediaQuery>
                
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



                


            </div>
        </>





    );
}