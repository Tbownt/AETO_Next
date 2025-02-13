interface MoviesState {
  movies: Movie[];
  filteredMovies: Movie[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  genres: Genre[];
  filters: unkown;
  page: number;
  totalPages: number;
  searchQuery: string;
  isLocalFilterActive: boolean;
}

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  poster_path?: string;
  backdrop_path?: string;
}

export interface Genre {
  id: number;
  name: string;
}

interface FilterModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface Filters {
  genre?: number;
  releaseDate?: string;
  voteAverage?: number;
}
