import React from "react";
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
    return (
        <Particles options={{
            backgroundMode: {
                enable: true,
                zIndex: -1
            },
            background: {
                color: "#222"
            },
            fpsLimit: 60,
            particles: {
                color: { value: "#333" },
                links: {
                    color: "#ffffff",
                    distance: 60,
                    enable: false,
                    opacity: 0.2,
                    width: 2
                },
                move: {
                    attract: { enable: false, rotateX: 600, rotateY: 1200 },
                    direction: "bottom",
                    enable: true,
                    outMode: "out",
                    random: false,
                    size: true,
                    speed: 2,
                    straight: false
                },
                number: { density: { enable: true, area: 800 }, value: 100 },
                opacity: {
                    random: true,
                    value: 1.0
                },
                shape: {
                    type: "circle"
                },
                size: {
                    random: true,
                    value: 5
                }
            },
            detectRetina: true
        }}
        />
    )
}