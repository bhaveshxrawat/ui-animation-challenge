import { HeadContent, Link } from "@tanstack/react-router";
import scopedStyles from "./DynamicStatusIndicator.module.css";
import commonStyles from "./common.module.css";
import { ArrowLeft } from "lucide-react";

function DynamicStatusIndicator() {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <div className={scopedStyles.container}>
        <header className={commonStyles.commonHeader}>
          <Link to="../">
            <ArrowLeft size="16" /> Back
          </Link>
        </header>
        <main></main>
      </div>
    </html>
  );
}
export default DynamicStatusIndicator;
