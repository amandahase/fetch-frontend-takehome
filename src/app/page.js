import styles from "./page.module.css";
import Login from "./components/login";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Login />
      </main>
    </div>
  );
}
