import { Link } from "@tanstack/react-router";
import commonStyles from "./common.module.css";
import scopedStyles from "./AnimatedCheckbox.module.css";
import { ArrowLeft } from "lucide-react";
import CheckboxList from "./CheckboxList";

function AnimatedCheckbox() {
  return (
    <div className={`${commonStyles.container} ${scopedStyles.container}`}>
      <header className={commonStyles.commonHeader}>
        <Link to="../">
          <ArrowLeft size="16" /> Back
        </Link>
      </header>
      <main>
        <CheckboxList />
      </main>
    </div>
  );
}
export default AnimatedCheckbox;
