import { FilterModal } from "@/components/filterModal/FilterModal";
import { SearchBar } from "./SearchBar";
import { FaFilter } from "react-icons/fa";
import { useFilterModal } from "@/hooks/useFilterModal";

export const Navbar = () => {
  const { isFilterModalOpen, openFilterModal, closeFilterModal } =
    useFilterModal();

  return (
    <nav className="bg-[#020d13] px-6 py-4 flex items-center justify-between">
      <h1 className="text-orange-500 text-2xl font-bold">Movie-App</h1>
      <div className="flex items-center gap-4">
        <SearchBar />
        <button
          onClick={openFilterModal}
          className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg flex items-center"
        >
          <FaFilter className="size-5" />
        </button>
      </div>
      <FilterModal
        isOpen={isFilterModalOpen}
        onRequestClose={closeFilterModal}
      />
    </nav>
  );
};
