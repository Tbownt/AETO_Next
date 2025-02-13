import { useSearch } from "@/hooks/useSearch";

export const SearchBar = () => {
  const { localSearch, setLocalSearch } = useSearch("");

  return (
    <div className="flex items-center gap-2 border rounded-lg p-2 bg-white w-full max-w-md">
      <input
        type="text"
        placeholder="Buscar..."
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
        className="outline-none w-full text-black"
      />
    </div>
  );
};
