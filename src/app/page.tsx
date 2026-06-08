import Seesaw from "@/components/Seesaw";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Seesaw />
      </section>
    </main>
  );
}
