import { motion } from "motion/react";
import styles from "./AnimatedToggles.module.css";
import { useState } from "react";

const topTabs = [
  { value: "free", label: "Free" },
  { value: "premium", label: "Premium" },
];
const freemiumTabs = [
  { value: "monthly", label: "Monthly" },
  { value: "annual", label: "Annual" },
];

function AnimatedSubTabList() {
  const [activeTab, setActiveTab] = useState("free");
  const [subActiveTab, setSubActiveTab] = useState("monthly");
  return (
    <div className={styles.tabs}>
      <div
        className={styles.list}
        role="tablist"
        aria-orientation="horizontal"
        tabIndex={0}
      >
        <div>
          <button
            type="button"
            role="tab"
            value={"free"}
            aria-selected={activeTab === "free"}
            onClick={() => setActiveTab("free")}
          >
            {activeTab === "free" ? (
              <motion.i
                aria-hidden="true"
                layoutId="top-underline"
                id="top-underline"
              />
            ) : null}
            Free
          </button>
        </div>
        <div>
          {activeTab === "premium" ? (
            <motion.i
              aria-hidden="true"
              layoutId="top-underline"
              id="top-underline"
            />
          ) : null}
          {activeTab === "premium" ? (
            <div
              className={`${styles.list} ${styles.subList}`}
              role="tablist"
              aria-orientation="horizontal"
              tabIndex={0}
            >
              <button
                type="button"
                role="tab"
                value={"monthly"}
                aria-selected={subActiveTab === "monthly"}
                onClick={() => setSubActiveTab("monthly")}
              >
                {subActiveTab === "monthly" ? (
                  <motion.i
                    aria-hidden="true"
                    layoutId="underline"
                    id="underline"
                  />
                ) : null}
                Monthly
              </button>
              <button
                type="button"
                role="tab"
                value={"annually"}
                aria-selected={subActiveTab === "annually"}
                onClick={() => setSubActiveTab("annually")}
              >
                {subActiveTab === "annually" ? (
                  <motion.i
                    aria-hidden="true"
                    layoutId="underline"
                    id="underline"
                  />
                ) : null}
                Annually
              </button>
            </div>
          ) : (
            <button
              type="button"
              role="tab"
              value={"premium"}
              aria-selected={activeTab === "premium"}
              onClick={() => setActiveTab("premium")}
            >
              {activeTab === "premium" ? (
                <motion.i
                  aria-hidden="true"
                  layoutId="top-underline"
                  id="top-underline"
                />
              ) : null}
              <p>Premium</p>
              <small>Monthly • Annual</small>
            </button>
          )}
        </div>
        {/* {activeTab === "premium" ? (
          <>
            {activeTab === "premium" ? (
              <motion.i
                aria-hidden="true"
                layoutId="top-underline"
                id="top-underline"
              />
            ) : null}
            <div
              className={styles.list}
              role="tablist"
              aria-orientation="horizontal"
              tabIndex={0}
            >
              <button
                type="button"
                role="tab"
                value={"monthly"}
                aria-selected={subActiveTab === "monthly"}
                onClick={() => setSubActiveTab("monthly")}
              >
                {subActiveTab === "monthly" ? (
                  <motion.i
                    aria-hidden="true"
                    layoutId="underline"
                    id="underline"
                  />
                ) : null}
                Monthly
              </button>
              <button
                type="button"
                role="tab"
                value={"annually"}
                aria-selected={subActiveTab === "annually"}
                onClick={() => setSubActiveTab("annually")}
              >
                {subActiveTab === "annually" ? (
                  <motion.i
                    aria-hidden="true"
                    layoutId="underline"
                    id="underline"
                  />
                ) : null}
                Annually
              </button>
            </div>
          </>
        ) : (
          <button
            type="button"
            role="tab"
            value={"premium"}
            aria-selected={activeTab === "premium"}
            onClick={() => setActiveTab("premium")}
          >
            {activeTab === "premium" ? (
              <motion.i
                aria-hidden="true"
                layoutId="top-underline"
                id="top-underline"
              />
            ) : null}
            <p>Premium</p>
            <small>Monthly • Annual</small>
          </button>
        )} */}
      </div>
    </div>
  );
}

function AnimatedTabList() {
  return <AnimatedSubTabList />;
}
export default AnimatedTabList;
