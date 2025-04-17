import { CircleCheck, TriangleAlert } from "lucide-react";
import styles from "./DynamicStatusIndicator.module.css";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Spinner } from "./AppSVGs";

function DynamicStatusSonner() {
  const state = ["progress", "success", "error"];
  const chronology = [0, 1, 0, 2];
  const [status, setStatus] = useState(0);
  const currentState = state[chronology[status]];
  useEffect(() => {
    const timerId = setInterval(() => {
      setStatus((prev) => (prev + 1) % chronology.length);
    }, 2700);
    return () => clearInterval(timerId);
  });
  return (
    <div aria-live="polite">
      <motion.div className={`${styles.sonner} ${styles[currentState]}`} layout>
        <motion.span>
          {currentState === "progress" && <Spinner />}
          {currentState === "success" && <CircleCheck size={18} />}
          {currentState === "error" && <TriangleAlert size={18} />}
        </motion.span>
        <AnimatePresence mode="popLayout">
          <motion.strong
            key={currentState}
            initial={{
              x: currentState === "progress" ? "-100%" : "100%",
              opacity: 0,
            }}
            animate={{ x: "0", opacity: 1 }}
            exit={{
              x: currentState === "progress" ? "-100%" : "100%",
              opacity: 0,
            }}
          >
            {currentState === "progress" && "Analyzing Transaction"}
            {currentState === "success" && "Transaction Safe"}
            {currentState === "error" && "Transaction Warning"}
          </motion.strong>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
export default DynamicStatusSonner;
