import React, { createContext, useContext, useState } from 'react';

interface Tab {
  id: number;
  title: string;
  content: string;
}

interface TabContextProps {
  currentTab: number;
  tabs: Tab[];
  setCurrentTab: (tabId: number) => void;
}

const TabContext = createContext<TabContextProps | undefined>(undefined);

export const TabProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState<number>(1);

  const tabs: Tab[] = [
    { id: 1, title: 'Tab 1', content: 'Content for Tab 1' },
    { id: 2, title: 'Tab 2', content: 'Content for Tab 2' },
  ];

  const value: TabContextProps = {
    currentTab,
    tabs,
    setCurrentTab,
  };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext must be used within a TabProvider');
  }
  return context;
};
