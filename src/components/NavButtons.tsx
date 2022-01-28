import React, { useState } from "react";
import {
    Tabs,
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

    

    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
    const tabChange = (active: number, tabkey: string) => {
        setActiveTab(active);
        navigate(tabNavs[active]);
    };

    return (
        <Tabs orientation={orientation} grow variant="default"
            active={activeTab}
            onTabChange={tabChange}    
        >
            <Tabs.Tab icon={<HomeIcon />} label="About" />
            <Tabs.Tab icon={<BackpackIcon />} label="Tech Stack" />
            <Tabs.Tab icon={<CrumpledPaperIcon />} label="Projects" />
        </Tabs>
    );
};