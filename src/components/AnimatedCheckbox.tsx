import { Link } from "@tanstack/react-router";
import commonStyles from "./common.module.css";
import { ArrowLeft } from "lucide-react";

function AnimatedCheckbox() {
  return (
    <div className={commonStyles.container}>
      <header className={commonStyles.commonHeader}>
        <Link to="../">
          <ArrowLeft size="16" /> Back
        </Link>
      </header>
      <main></main>
    </div>
  );
}
export default AnimatedCheckbox;
