export const NoMoviesMessage = ({
  filteredMovies,
  filters,
}: {
  filteredMovies: unknown[];
  filters: unknown;
}) => {
  if (filteredMovies.length === 0 && !filters) {
    return (
      <p className="mt-4 text-gray-600">
        Escribe el nombre de una película para buscar.
      </p>
    );
  }

  if (
    filteredMovies.length === 0 &&
    filters &&
    Object.keys(filters).length > 0
  ) {
    return (
      <p className="mt-4 text-gray-600">
        No hay películas que encajen con esas especificaciones en esta página.
      </p>
    );
  }

  return null;
};
