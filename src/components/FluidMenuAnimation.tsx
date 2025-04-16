import { HeadContent, Link } from "@tanstack/react-router";
import styles from "./FluidMenuAnimation.module.css";
import FluidMenuBtn from "./FluidMenuBtn";
import { ArrowLeft } from "lucide-react";

function FluidMenuAnimation() {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <div className={styles.container}>
        <header>
          <FluidMenuBtn />
          <Link to="../">
            <ArrowLeft size="16" /> Back
          </Link>
        </header>
        <main>
          <h2>Open the menu in the top-left corner.</h2>
        </main>
      </div>
    </html>
  );
}
export default FluidMenuAnimation;
