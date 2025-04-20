import { Link } from "@tanstack/react-router";
import commonStyles from "./common.module.css";
import scopedStyles from "./AnimatedToggles.module.css";
import { ArrowLeft } from "lucide-react";
import AnimatedTabList from "./AnimatedTabList";

function AnimatedToggles() {
  return (
    <div className={`${commonStyles.container} ${scopedStyles.container}`}>
      <header className={commonStyles.commonHeader}>
        <Link to="../">
          <ArrowLeft size="16" /> Back
        </Link>
      </header>
      <main>
        <AnimatedTabList />
      </main>
    </div>
  );
}
export default AnimatedToggles;
