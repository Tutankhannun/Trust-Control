"use client";

import styles from "./FlipCard.module.css";
import { PROMPT, pad2, type Card, type Group } from "@/data/cards";

export default function FlipCard({
  card,
  group,
  flipped,
  onToggle,
  big = false,
}: {
  card: Card;
  group: Group;
  flipped: boolean;
  onToggle: () => void;
  big?: boolean;
}) {
  const n = pad2(card.id);
  const isLight = group.color.toLowerCase() === "#ffffff";

  return (
    <button
      type="button"
      className={`${styles.card} ${flipped ? styles.flipped : ""} ${
        big ? styles.big : ""
      }`}
      onClick={onToggle}
      aria-pressed={flipped}
      aria-label={`카드 ${n}${flipped ? " — 닫기" : " — 펼치기"}`}
    >
      <div className={styles.inner}>
        {/* ── 뒤집힌 상태(기본): 색상 로고면 ── */}
        <div
          className={`${styles.face} ${styles.back} ${
            isLight ? styles.backLight : ""
          }`}
          style={{ background: group.color, color: group.text }}
        >
          <span className={`${styles.bTrust} mono`}>TRUST</span>
          <svg
            className={styles.line}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <line x1="14" y1="92" x2="92" y2="22" />
            <line x1="8" y1="58" x2="86" y2="46" />
          </svg>
          <span className={`${styles.bControl} mono`}>CONTROL</span>
          <span
            className={`${styles.bNum} mono`}
            style={{ color: group.text }}
          >
            {n}
          </span>
        </div>

        {/* ── 펼친 상태: 상황 텍스트 ── */}
        <div className={`${styles.face} ${styles.front}`}>
          <div className={styles.fTop}>
            <span className={`${styles.fBrand} mono`}>TRUST/CONTROL</span>
            <span className={`${styles.fNum} mono`}>{n}</span>
          </div>
          <p className={styles.prompt}>{PROMPT}</p>
          <p className={styles.situation}>{card.situation}</p>
          <div className={styles.scale} aria-hidden>
            {[0, 1, 2, 3, 4, 5].map((s) => (
              <span key={s} className="mono">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}
