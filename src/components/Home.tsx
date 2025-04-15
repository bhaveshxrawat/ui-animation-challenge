import { Link } from "@tanstack/react-router";
import styles from "./Home.module.css";
import { Link as LinkIcon } from "lucide-react";

function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link to="./fluid-menu-animation">
            <LinkIcon size={16} /> Fluid Menu Animation
          </Link>
        </li>
      </ul>
    </main>
  );
}
export default Home;
