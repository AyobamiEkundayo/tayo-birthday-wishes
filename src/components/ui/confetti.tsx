
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 999,
};

export function Confetti() {
  const refAnimationInstance = useRef<null | confetti.CreateTypes>(null);
  const [intervalId, setIntervalId] = useState<number | null>(null);

  const getInstance = useCallback((instance: confetti.CreateTypes | null) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#9b87f5", "#ea384c", "#F97316", "#33C3F0"],
      });

      refAnimationInstance.current({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#9b87f5", "#ea384c", "#F97316", "#33C3F0"],
      });
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      const id = window.setInterval(nextTickAnimation, 400);
      setIntervalId(id);
    }
  }, [intervalId, nextTickAnimation]);

  const stopAnimation = useCallback(() => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  }, [intervalId]);

  const makeFireworks = useCallback(() => {
    if (refAnimationInstance.current) {
      const color = ["#9b87f5", "#ea384c", "#F97316", "#33C3F0"][
        Math.floor(Math.random() * 4)
      ];
      const originX = 0.1 + Math.random() * 0.8;
      const originY = 0.1 + Math.random() * 0.3;

      refAnimationInstance.current({
        spread: 100,
        ticks: 50,
        gravity: 1,
        decay: 0.94,
        startVelocity: 30,
        particleCount: 100,
        scalar: 1.2,
        shapes: ["circle", "square"],
        colors: [color],
        origin: { x: originX, y: originY },
      });
    }
  }, []);

  useEffect(() => {
    startAnimation();
    
    // Fire occasional big fireworks
    const fireworksId = window.setInterval(makeFireworks, 2500);

    return () => {
      stopAnimation();
      clearInterval(fireworksId);
    };
  }, [startAnimation, stopAnimation, makeFireworks]);

  return (
    <ReactCanvasConfetti
      refConfetti={getInstance}
      style={canvasStyles as React.CSSProperties}
    />
  );
}
