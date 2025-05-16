
"use client";

import { useEffect, useState, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import type { CreateTypes } from "canvas-confetti";

interface ConfettiProps {
  duration?: number;
}

export const Confetti = ({ duration = 3000 }: ConfettiProps) => {
  const [isActive, setIsActive] = useState(true);
  const confettiRef = useRef<CreateTypes | null>(null);

  const getInstance = (instance: CreateTypes | null) => {
    confettiRef.current = instance;
  };

  const makeShot = (particleRatio: number, opts: object) => {
    if (confettiRef.current) {
      confettiRef.current({
        ...opts,
        origin: { y: 0.5, x: 0.5 },
        particleCount: Math.floor(200 * particleRatio),
      });
    }
  };

  const fire = () => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
      decay: 0.91,
      scalar: 0.8,
      ticks: 100,
      colors: ['#9b87f5', '#ea384c', '#F97316', '#33C3F0', '#D6BCFA']
    });

    makeShot(0.2, {
      spread: 60,
      startVelocity: 45,
      decay: 0.92,
      scalar: 1.2,
      ticks: 120,
      colors: ['#9b87f5', '#ea384c', '#F97316', '#33C3F0', '#D6BCFA']
    });

    makeShot(0.1, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      ticks: 90,
      colors: ['#9b87f5', '#ea384c', '#F97316', '#33C3F0', '#D6BCFA']
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 35,
      decay: 0.9,
      scalar: 1,
      ticks: 100,
      colors: ['#9b87f5', '#ea384c', '#F97316', '#33C3F0', '#D6BCFA']
    });

    makeShot(0.15, {
      spread: 160,
      startVelocity: 30,
      decay: 0.92,
      scalar: 1.2,
      ticks: 110,
      colors: ['#9b87f5', '#ea384c', '#F97316', '#33C3F0', '#D6BCFA']
    });
  };

  useEffect(() => {
    if (isActive && confettiRef.current) {
      fire();

      const timeout = setTimeout(() => {
        setIsActive(false);
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [isActive, duration, confettiRef.current]);

  return (
    <ReactCanvasConfetti
      style={{
        position: "fixed",
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
      ref={getInstance}
    />
  );
};
