import { useState } from 'react';

export const useFAQ = () => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const isItemOpen = (id: string) => openItems.has(id);

  return {
    openItems,
    toggleItem,
    isItemOpen,
  };
};
