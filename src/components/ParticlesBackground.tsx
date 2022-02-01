import React from "react";
import Particles from "react-tsparticles";
import { useMantineTheme } from "@mantine/core";

export default function ParticlesBackground() {

    const theme = useMantineTheme();

    return (
        <Particles options={{
            backgroundMode: {
                enable: true,
                zIndex: -1
            },
            background: {
                color: theme.colors.gray[3]
            },
            fpsLimit: 60,
            particles: {
                color: { 
                    value: theme.colors.gray[6],
                },
                links: {
                    color: theme.colors.gray[9],
                    distance: 80,
                    enable: true,
                    opacity: 0.4,
                    width: 2
                },
                move: {
                    attract: { enable: false, rotateX: 600, rotateY: 1200 },
                    direction: "top",
                    enable: true,
                    outMode: "out",
                    random: true,
                    size: true,
                    speed: 3,
                    straight: false
                },
                number: { density: { enable: true, area: 800 }, value: 100 },
                opacity: {
                    random: true,
                    value: 0.7
                },
                shape: {
                    type: "circle"
                },
                size: {
                    random: true,
                    value: 5
                }
            },
            detectRetina: true,
        }}
        />
    )
}