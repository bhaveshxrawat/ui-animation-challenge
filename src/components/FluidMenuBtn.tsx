import { AnimatePresence, motion } from "motion/react";
import { House, Mail, Settings, User } from "lucide-react";
import styles from "./FluidMenuBtn.module.css";
import { useEffect, useId, useRef, useState } from "react";

function FluidMenuBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const idOne = useId();
  const idTwo = useId();
  const variants = {
    active: {
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
    inactive: {
      filter: "blur(2px)",
      opacity: 0,
    },
  };
  const ulVariants = {
    active: {
      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
    },
    inactive: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  const btns = [
    {
      label: "Go to Homepage",
      icon: <House size={18} />,
    },
    {
      label: "Go to Messages",
      icon: <Mail size={18} />,
    },
    {
      label: "Go to User Profile",
      icon: <User size={18} />,
    },
    {
      label: "Go to App Settings",
      icon: <Settings size={18} />,
    },
  ];

  return (
    <div className={styles.btnContainer}>
      <button
        className={styles.btn}
        role="menuitem"
        aria-haspopup="menu"
        aria-expanded={false}
        id={idOne}
        aria-label="User Menu"
        aria-controls={idTwo}
        onClick={() => setIsOpen((s) => !s)}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.svg
              variants={variants}
              initial={"inactive"}
              animate={"active"}
              exit={"inactive"}
              className="lucide lucide-x-icon lucide-x"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </motion.svg>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!isOpen && (
            <motion.svg
              variants={variants}
              initial={hasMounted.current ? "inactive" : false}
              animate={"active"}
              exit={"inactive"}
              className="lucide lucide-menu-icon lucide-menu"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 12h16M4 6h16M4 18h16" />
            </motion.svg>
          )}
        </AnimatePresence>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={ulVariants}
            initial={"inactive"}
            animate={"active"}
            exit={"inactive"}
            aria-labelledby={idOne}
            id={idTwo}
            className={styles.menu}
          >
            {btns.map((btn, i) => (
              <motion.button
                key={i}
                variants={{
                  inactive: {
                    y: -40 * ++i,
                    opacity: 0,
                    transition: {
                      y: { stiffness: 1000 },
                    },
                  },
                  active: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      y: { stiffness: 1000, velocity: -100 },
                    },
                  },
                }}
                className={`${styles.btn} ${styles.menuBtn}`}
                aria-label={btn.label}
              >
                {btn.icon}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default FluidMenuBtn;
