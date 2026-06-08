"use client";

import { useEffect, useRef } from "react";
import styles from "./Seesaw.module.css";

const MAX_ANGLE = 30; // degrees — matches the X spread in the source design

export default function Seesaw() {
  const barRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // single source of truth for the rotation, driven by rAF
  const current = useRef(0);
  const pointer = useRef<number | null>(null); // -1 … 1 when hovering, else null

  useEffect(() => {
    let raf = 0;
    const start = performance.now();

    const loop = (now: number) => {
      const t = (now - start) / 1000;

      // target: follow pointer when present, otherwise gentle seesaw
      const target =
        pointer.current !== null
          ? pointer.current * MAX_ANGLE
          : Math.sin(t * 0.9) * MAX_ANGLE;

      // ease current toward target
      current.current += (target - current.current) * 0.08;

      if (barRef.current) {
        barRef.current.style.transform = `translate(-50%, -50%) rotate(${current.current.toFixed(
          3,
        )}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleMove = (e: React.PointerEvent) => {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const ratio = ((e.clientX - r.left) / r.width) * 2 - 1; // -1 … 1
    pointer.current = Math.max(-1, Math.min(1, ratio));
  };

  const handleLeave = () => {
    pointer.current = null;
  };

  return (
    <div
      ref={stageRef}
      className={styles.stage}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <span className={`${styles.label} ${styles.trust}`}>TRUST</span>

      <div className={styles.pivot}>
        <div ref={barRef} className={styles.bar} />
      </div>

      <span className={`${styles.label} ${styles.control}`}>CONTROL</span>
    </div>
  );
}
