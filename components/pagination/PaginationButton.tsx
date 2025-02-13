interface PaginationButtonProps {
  pageNumber: number;
  currentPage: number;
  onClick: (page: number) => void;
}

export const PaginationButton = ({
  pageNumber,
  currentPage,
  onClick,
}: PaginationButtonProps) => (
  <button
    onClick={() => onClick(pageNumber)}
    className={`px-3 py-1 border rounded ${
      currentPage === pageNumber ? "bg-orange-500 text-white" : ""
    }`}
  >
    {pageNumber}
  </button>
);
