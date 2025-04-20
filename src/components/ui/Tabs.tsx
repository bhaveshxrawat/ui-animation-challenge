import { useContext } from "@/hooks/useContext";
import { motion } from "motion/react";
import { useTabs } from "@/hooks/useTabs";
import React, { createContext } from "react";

type TabsContextProps = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const TabsContext = createContext<TabsContextProps | null>(null);

function Tabs({
  cn,
  initialTab,
  children,
}: {
  cn: string;
  initialTab: string;
  children: React.ReactNode;
}) {
  const { activeTab, setActiveTab } = useTabs(initialTab);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn}>{children}</div>
    </TabsContext.Provider>
  );
}

function List({ children, cn }: { children: React.ReactNode; cn: string }) {
  return (
    <div
      className={cn}
      role="tablist"
      aria-orientation="horizontal"
      tabIndex={0}
    >
      {children}
    </div>
  );
}

function Trigger({
  value,
  children,
}: {
  children: React.ReactNode;
  value: string;
}) {
  const { activeTab, setActiveTab } = useContext<TabsContextProps>(
    TabsContext,
    "tabs"
  );
  return (
    <button
      type="button"
      role="tab"
      value={value}
      aria-selected={activeTab === value}
      onClick={() => setActiveTab(value)}
    >
      {activeTab === value ? (
        <motion.i aria-hidden="true" layoutId="underline" id="underline" />
      ) : null}
      {children}
    </button>
  );
}

Tabs.List = List;
Tabs.Trigger = Trigger;

export default Tabs;
