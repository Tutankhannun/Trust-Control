"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

export default function Nav() {
  const path = usePathname();
  return (
    <header className={styles.nav}>
      <Link href="/" className={styles.wordmark}>
        TRUST<span className={styles.slash}>/</span>CONTROL
      </Link>
      <nav className={styles.links}>
        <Link
          href="/"
          className={`${styles.link} ${path === "/" ? styles.active : ""}`}
        >
          <span className={styles.idx}>01</span> 시소
        </Link>
        <Link
          href="/cards"
          className={`${styles.link} ${
            path?.startsWith("/cards") ? styles.active : ""
          }`}
        >
          <span className={styles.idx}>02</span> 카드 아카이브
        </Link>
      </nav>
    </header>
  );
}
