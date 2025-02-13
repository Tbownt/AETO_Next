import { PageRange } from "./PageRange";

interface PageNavigationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PageNavigation = ({
  currentPage,
  totalPages,
  onPageChange,
}: PageNavigationProps) => (
  <div className="flex gap-2 mt-6 flex-wrap justify-center">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="px-3 py-1 border rounded disabled:opacity-50 bg-orange-500 hover:bg-orange-600 text-white"
    >
      Anterior
    </button>

    <PageRange
      startPage={Math.max(1, currentPage - 2)}
      endPage={Math.min(totalPages, currentPage + 2)}
      currentPage={currentPage}
      onPageChange={onPageChange}
    />

    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="px-3 py-1 border rounded disabled:opacity-50 bg-orange-500 hover:bg-orange-600 text-white"
    >
      Siguiente
    </button>
  </div>
);
