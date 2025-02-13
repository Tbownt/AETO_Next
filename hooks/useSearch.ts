import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";
import { useAppDispatch } from "@/hooks/useStoreHooks";
import { setSearchQuery, setCurrentPage } from "@/store/moviesSlice";
import { searchMovies } from "@/store/thunks";

export const useSearch = (initialQuery: string) => {
  const dispatch = useAppDispatch();
  const [localSearch, setLocalSearch] = useState(initialQuery);

  const debouncedSearchQuery = useDebounce(localSearch, 500);

  useEffect(() => {
    if (debouncedSearchQuery.trim().length > 0) {
      dispatch(setSearchQuery(debouncedSearchQuery));
      dispatch(setCurrentPage(1));
      dispatch(searchMovies({ query: debouncedSearchQuery, page: 1 }));
    }
  }, [debouncedSearchQuery, dispatch]);

  return {
    localSearch,
    setLocalSearch,
  };
};
