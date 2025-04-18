import { useState } from "react";
import scopedStyles from "./AnimatedCheckbox.module.css";
import { Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

interface CheckboxItem {
  id: number;
  label: string;
  name: string;
  checked: boolean;
}

function Checkbox({
  checkboxData,
  onCheckedChange,
}: {
  checkboxData: CheckboxItem;
  onCheckedChange: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
}) {
  const { checked, id, label, name } = checkboxData;
  return (
    <div className={scopedStyles.checkbox}>
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        id={label}
        onClick={() =>
          onCheckedChange(
            {
              target: { checked: !checked },
            } as React.ChangeEvent<HTMLInputElement>,
            id
          )
        }
      >
        <motion.svg
          className="lucide lucide-square-check-icon lucide-square-check"
          width="100%"
          height="100%"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <AnimatePresence mode="wait">
            {checked && (
              <motion.rect
                height="18"
                width="18"
                rx="5"
                ry="5"
                x="3"
                y="3"
                strokeWidth={0}
                fill="#2b7fff"
                initial={{ scale: 0 }}
                animate={{ scale: 1, transition: { delay: 0.3 } }}
                exit={{ scale: 0, transition: { delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!checked && (
              <motion.rect
                height="18"
                width="18"
                rx="5"
                ry="5"
                x="3"
                y="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1, transition: { delay: 0.4 } }}
                exit={{ pathLength: 0, transition: { delay: 0 } }}
                strokeWidth={2}
                stroke="grey"
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {checked && (
              <motion.path
                d="m9 12 2 2 4-4"
                stroke="white"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ pathLength: 0, transition: { delay: 0 } }}
                transition={{ delay: 0.5 }}
              />
            )}
          </AnimatePresence>
        </motion.svg>
      </button>
      <input
        type="checkbox"
        aria-hidden="true"
        checked={checked}
        onChange={(e) => onCheckedChange(e, id)}
      />
      <motion.label
        animate={
          checked
            ? {
                color: "#9b9b9b",
                textDecoration: "line-through",
                x: [0, 5, 0],
              }
            : {
                color: "#000",
                textDecoration: "initial",
                x: [0, -5, 0],
              }
        }
        transition={{ type: "tween" }}
        htmlFor={label}
      >
        {name}
      </motion.label>
    </div>
  );
}

function CheckboxList() {
  const [list, setList] = useState([
    {
      id: 1,
      label: "get-started",
      name: "Get started",
      checked: false,
    },
    {
      id: 2,
      label: "almost-there",
      name: "Almost there",
      checked: false,
    },
    {
      id: 3,
      label: "you-did-it",
      name: "You did it",
      checked: false,
    },
  ]);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>, id: number) {
    setList((prev) => {
      return prev.map((prevItem) => {
        if (prevItem.id === id) {
          return { ...prevItem, checked: e.target.checked };
        }
        return prevItem;
      });
    });
  }
  return (
    <div className={scopedStyles.checkboxWrapper}>
      {list.map((item) => (
        <Checkbox
          key={item.id}
          checkboxData={item}
          onCheckedChange={handleChange}
        />
      ))}
    </div>
  );
}
export default CheckboxList;
