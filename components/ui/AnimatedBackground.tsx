"use client";

import { useCallback } from "react";
import { ISourceOptions, Engine } from "@tsparticles/engine";
import Particles from "@tsparticles/react";

const particlesConfig: ISourceOptions = {
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: "#000000",
    },
    move: {
      enable: true,
      speed: 1,
    },
    links: {
      enable: true,
      color: "#000000",
      distance: 150,
      opacity: 0.3,
      width: 1,
    },
    number: {
      value: 50,
    },
    opacity: {
      value: 0.3,
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
};

export default function AnimatedBackground() {
  const initialize = useCallback(async (engine: Engine) => {
    // initialization code here
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      options={particlesConfig}
    />
  );
}
