
"use client";

import { useEffect, useState, useCallback } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import type { CreateTypes } from "canvas-confetti";

interface ConfettiProps {
  duration?: number;
}

export const Confetti = ({ duration = 3000 }: ConfettiProps) => {
  const [isActive, setIsActive] = useState(true);
  const [confettiInstance, setConfettiInstance] = useState<CreateTypes | null>(null);

  const getInstance = useCallback((instance: CreateTypes | null) => {
    setConfettiInstance(instance);
  }, []);

  const makeShot = useCallback((particleRatio: number, opts: object) => {
    if (confettiInstance) {
      confettiInstance({
        ...opts,
        origin: { y: 0.5, x: 0.5 },
        particleCount: Math.floor(200 * particleRatio),
      });
    }
  }, [confettiInstance]);

  const fire = useCallback(() => {
    if (!confettiInstance) return;
    
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
  }, [confettiInstance, makeShot]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (isActive && confettiInstance) {
      try {
        fire();
      } catch (error) {
        console.error("Error firing confetti:", error);
      }

      timeout = setTimeout(() => {
        setIsActive(false);
      }, duration);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isActive, duration, confettiInstance, fire]);

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
      onInit={getInstance}
    />
  );
};
