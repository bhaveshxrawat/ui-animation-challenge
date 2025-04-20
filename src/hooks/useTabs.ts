import { useState } from "react";

export function useTabs(selected: string) {
  const [activeTab, setActiveTab] = useState(selected);

  return { activeTab, setActiveTab };
}
