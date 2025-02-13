import { useAppDispatch, useAppSelector } from "@/hooks/useStoreHooks";
import { setCurrentPage } from "@/store/moviesSlice";
import { searchMovies } from "@/store/thunks";
import { PageNavigation } from "./PageNavigation";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const { page, totalPages, searchQuery, isLocalFilterActive } = useAppSelector(
    (state) => state.moviesStore
  );

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage));

    if (!isLocalFilterActive) {
      dispatch(searchMovies({ query: searchQuery, page: newPage }));
    }
  };

  return (
    <PageNavigation
      currentPage={page}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
};
