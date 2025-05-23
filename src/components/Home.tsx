import { Link } from "@tanstack/react-router";
import styles from "./Home.module.css";
import { ArrowRight } from "lucide-react";

function Home() {
  return (
    <main className={styles.main}>
      <ul>
        <li>
          <Link to="./fluid-menu-animation">
            Day 1. Fluid Menu Animation <ArrowRight size={16} />
          </Link>
        </li>
        <li>
          <Link to="./dynamic-status-indicator">
            Day 2. Dynamic Status Indicator <ArrowRight size={16} />
          </Link>
        </li>
        <li>
          <Link to="./animated-checkbox">
            Day 3. Animated Checkbox <ArrowRight size={16} />
          </Link>
        </li>
        <li>
          <Link to="./animated-toggles">
            Day 4. Animated Toggles <ArrowRight size={16} />
          </Link>
        </li>
      </ul>
    </main>
  );
}
export default Home;
