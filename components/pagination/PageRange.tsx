import { PaginationButton } from "./PaginationButton";

interface PageRangeProps {
  startPage: number;
  endPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const PageRange = ({
  startPage,
  endPage,
  currentPage,
  onPageChange,
}: PageRangeProps) => (
  <>
    {[...Array(endPage - startPage + 1)].map((_, i) => {
      const pageNumber = startPage + i;
      return (
        <PaginationButton
          key={pageNumber}
          pageNumber={pageNumber}
          currentPage={currentPage}
          onClick={onPageChange}
        />
      );
    })}
  </>
);
