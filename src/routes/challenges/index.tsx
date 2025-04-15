import Home from "@/components/Home";
import styles from "@/App.module.css";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/challenges/")({
  component: Index,
});

function Index() {
  return (
    <div className={styles.appContainer}>
      <header>Peerlist UI Animation Challenge</header>
      <Home />
    </div>
  );
}
