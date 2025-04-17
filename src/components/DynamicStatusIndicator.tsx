import { Link } from "@tanstack/react-router";
import scopedStyles from "./DynamicStatusIndicator.module.css";
import commonStyles from "./common.module.css";
import { ArrowLeft } from "lucide-react";
import DynamicStatusSonner from "./DynamicStatusSonner";

function DynamicStatusIndicator() {
  return (
    <div className={`${commonStyles.container} ${scopedStyles.container}`}>
      <header className={commonStyles.commonHeader}>
        <Link to="../">
          <ArrowLeft size="16" /> Back
        </Link>
      </header>
      <main>
        <DynamicStatusSonner />
      </main>
    </div>
  );
}
export default DynamicStatusIndicator;
