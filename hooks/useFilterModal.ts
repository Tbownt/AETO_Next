import { useState } from "react";

export const useFilterModal = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const openFilterModal = () => setIsFilterModalOpen(true);
  const closeFilterModal = () => setIsFilterModalOpen(false);

  return {
    isFilterModalOpen,
    openFilterModal,
    closeFilterModal,
  };
};
