"use client";
import { useAppSelector } from "@/hooks/useStoreHooks";
import { Pagination } from "../pagination/Pagination";
import { Navbar } from "../Navbar";
import { MoviesChart } from "./MoviesChart";
import { SearchStatus } from "./SearchStatus";
import { MovieList } from "./MovieList";
import { NoMoviesMessage } from "./NoMoviesMessage";

export const Home = () => {
  const { filteredMovies, status, error, isLocalFilterActive, filters } =
    useAppSelector((state) => state.moviesStore);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-4">Búsqueda de Películas 🎬</h1>
        <SearchStatus status={status} error={error} />
        <MovieList movies={filteredMovies} />
        <NoMoviesMessage filteredMovies={filteredMovies} filters={filters} />
        {!isLocalFilterActive && filteredMovies.length > 0 && <Pagination />}
        <MoviesChart />
      </main>
    </>
  );
};
