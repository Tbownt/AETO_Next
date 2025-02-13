import { Movie } from "@/types";
import { MovieCard } from "../MovieCard";

export const MovieList = ({ movies }: { movies: Movie[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 w-full max-w-6xl">
    {movies?.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);
