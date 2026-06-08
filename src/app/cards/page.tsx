"use client";

import { useEffect, useState } from "react";
import styles from "./cards.module.css";
import FlipCard from "@/components/FlipCard";
import { GROUPS, cardsByGroup, PERSONA, type Card } from "@/data/cards";

export default function CardsPage() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [open, setOpen] = useState<Card | null>(null);
  const [openFlipped, setOpenFlipped] = useState(false);

  const group = GROUPS.find((g) => g.id === activeId) ?? null;
  const openGroup = open ? GROUPS.find((g) => g.id === open.group)! : null;

  // 오버레이 카드는 마운트 후 살짝 뒤에 뒤집으며 등장
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => setOpenFlipped(true), 60);
      return () => clearTimeout(t);
    }
    setOpenFlipped(false);
  }, [open]);

  const closeOverlay = () => {
    setOpenFlipped(false);
    setTimeout(() => setOpen(null), 380);
  };

  return (
    <main className={styles.main}>
      {/* ── 페르소나 (항상 상단) ── */}
      <section className={styles.persona}>
        <div className={styles.personaAvatar} aria-hidden />
        <div className={styles.personaInfo}>
          <span className={styles.personaName}>{PERSONA.name}</span>
          <dl className={styles.personaList}>
            <div>
              <dt className="mono">BIRTH</dt>
              <dd>{PERSONA.birth}</dd>
            </div>
            <div>
              <dt className="mono">ADDRESS</dt>
              <dd>{PERSONA.address}</dd>
            </div>
            <div>
              <dt className="mono">HOBBY</dt>
              <dd>{PERSONA.hobby}</dd>
            </div>
            <div>
              <dt className="mono">INTEREST</dt>
              <dd>{PERSONA.interest}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── 상황 키워드 선택 / 카드 덱 ── */}
      {!group ? (
        <section className={styles.picker}>
          <p className={`${styles.pickKicker} mono`}>SELECT A SITUATION</p>
          <div className={styles.keywords}>
            {GROUPS.map((g) => {
              const light = g.color.toLowerCase() === "#ffffff";
              return (
                <button
                  key={g.id}
                  type="button"
                  className={`${styles.keyword} ${light ? styles.kwLight : ""}`}
                  style={{ background: g.color, color: g.text }}
                  onClick={() => setActiveId(g.id)}
                >
                  <span className={`${styles.kwNumeral} mono`}>{g.numeral}</span>
                  <span className={styles.kwTitle}>{g.title}</span>
                  <span className={`${styles.kwSub} mono`}>{g.subtitle}</span>
                  <span className={`${styles.kwCount} mono`}>
                    {String(cardsByGroup(g.id).length).padStart(2, "0")} CARDS →
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      ) : (
        <section className={styles.deck}>
          <div className={styles.deckHead}>
            <button
              type="button"
              className={`${styles.back} mono`}
              onClick={() => setActiveId(null)}
            >
              ← 상황 선택
            </button>
            <div className={styles.deckTitleWrap}>
              <span className={`${styles.deckNumeral} mono`}>
                {group.numeral}
              </span>
              <h2 className={styles.deckTitle}>{group.title}</h2>
              <span
                className={styles.deckDot}
                style={{ background: group.color }}
                aria-hidden
              />
            </div>
            <p className={`${styles.deckHint} mono`}>카드를 눌러 펼치기</p>
          </div>

          <div className={styles.cardRow}>
            {cardsByGroup(group.id).map((card) => (
              <FlipCard
                key={card.id}
                card={card}
                group={group}
                flipped={false}
                onToggle={() => setOpen(card)}
              />
            ))}
          </div>
        </section>
      )}

      {/* ── 카드 읽기 오버레이 ── */}
      {open && openGroup && (
        <div className={styles.overlay} onClick={closeOverlay}>
          <div
            className={styles.overlayCard}
            onClick={(e) => e.stopPropagation()}
          >
            <FlipCard
              card={open}
              group={openGroup}
              flipped={openFlipped}
              onToggle={closeOverlay}
              big
            />
          </div>
          <button
            type="button"
            className={`${styles.overlayClose} mono`}
            onClick={closeOverlay}
          >
            닫기 ✕
          </button>
        </div>
      )}
    </main>
  );
}
