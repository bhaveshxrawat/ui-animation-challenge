import { Link } from "@tanstack/react-router";
import scopedStyles from "./FluidMenuAnimation.module.css";
import commonStyles from "./common.module.css";
import FluidMenuBtn from "./FluidMenuBtn";
import { ArrowLeft } from "lucide-react";

function FluidMenuAnimation() {
  return (
    <div className={`${commonStyles.container} ${scopedStyles.container}`}>
      <header className={commonStyles.commonHeader}>
        <FluidMenuBtn />
        <Link to="../">
          <ArrowLeft size="16" /> Back
        </Link>
      </header>
      <main>
        <h2>Open the menu in the top-left corner.</h2>
      </main>
    </div>
  );
}
export default FluidMenuAnimation;
