import React, { useState } from "react";
import {
    Paper,
    Tabs,
    useMantineTheme,
} from '@mantine/core';
import {
    HomeIcon,
    BackpackIcon,
    CrumpledPaperIcon
} from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';

interface Props {
    orientation: "horizontal" | "vertical"
};

const tabNavs = [
    "/",
    "/tech-stack",
    "/projects"
];

export default function NavButtons({ orientation }: Props) {

    const theme = useMantineTheme();

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
    const tabChange = (active: number, tabkey: string) => {
        setActiveTab(active);
        navigate(tabNavs[active]);
    };

    return (
        <div style={{
            borderRadius: "10px 10px 0px 0px",
            backgroundColor: "white",
            width: "100%"
        }}>
            <Tabs orientation={orientation} grow variant="default"
                active={activeTab}
                onTabChange={tabChange}
                color={"teal"}
            >
                <Tabs.Tab icon={<HomeIcon />} label="Home" />
                <Tabs.Tab icon={<BackpackIcon />} label="Tech Stack" />
                <Tabs.Tab icon={<CrumpledPaperIcon />} label="Projects" />
            </Tabs>
        </div>


    );
};