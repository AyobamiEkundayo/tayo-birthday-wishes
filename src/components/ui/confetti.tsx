
import React, { useCallback, useEffect, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import type { IConfettiOptions } from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 50,
} as React.CSSProperties;

export function Confetti() {
  const refAnimationInstance = useRef<any>(null);

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio: number, opts: IConfettiOptions) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7, x: Math.random() },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ["#ea384c", "#9b87f5", "#D6BCFA", "#9b87f5"],
    });

    makeShot(0.2, {
      spread: 60,
      colors: ["#ea384c", "#9b87f5", "#D6BCFA", "#9b87f5"],
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ["#ea384c", "#9b87f5", "#D6BCFA", "#9b87f5"],
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ["#ea384c", "#9b87f5", "#D6BCFA", "#9b87f5"],
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ["#ea384c", "#9b87f5", "#D6BCFA", "#9b87f5"],
    });
  }, [makeShot]);

  useEffect(() => {
    // Fire confetti on initial load
    setTimeout(() => {
      fire();
    }, 1000);

    // Fire confetti every 8 seconds
    const interval = setInterval(() => {
      fire();
    }, 8000);

    return () => clearInterval(interval);
  }, [fire]);

  return <ReactCanvasConfetti style={canvasStyles} refConfetti={getInstance} />;
}
