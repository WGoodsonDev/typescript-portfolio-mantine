import React from "react";
import {
    Tabs,
} from '@mantine/core';
import {
    HomeIcon,
    BackpackIcon,
    CrumpledPaperIcon
} from '@radix-ui/react-icons';

export default function NavButtons() {
    return (
        <Tabs grow variant="default">
            <Tabs.Tab icon={<HomeIcon />} label="Portfolio" />
            <Tabs.Tab icon={<BackpackIcon />} label="Extra" />
            <Tabs.Tab icon={<CrumpledPaperIcon />} label="About Me" />
        </Tabs>
    )
}