import { MoviesState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { fetchGenres, searchMovies } from "./thunks";

const initialState: MoviesState = {
  movies: [],
  status: "idle",
  error: null,
  genres: [],
  filteredMovies: [],
  filters: {},
  page: 1,
  totalPages: 1,
  searchQuery: "",
  isLocalFilterActive: false,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    // Filters
    applyFilters: (state, action) => {
      const filters = action.payload;
      state.filters = filters;
      state.isLocalFilterActive = true;

      state.filteredMovies = state.movies.filter((movie) => {
        if (filters.genre && !movie.genre_ids.includes(filters.genre)) {
          return false;
        }
        if (filters.releaseDate && movie.release_date) {
          const movieYear = new Date(movie.release_date)
            .getFullYear()
            .toString();
          if (movieYear !== filters.releaseDate.split("-")[0]) {
            return false;
          }
        }
        if (filters.voteAverage && movie.vote_average < filters.voteAverage) {
          return false;
        }
        return true;
      });
    },
    clearFilters: (state) => {
      state.filters = {};
      state.filteredMovies = state.movies;
      state.isLocalFilterActive = false;
    },
    // Pagination
    setCurrentPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.movies = action.payload.results;
        state.page = action.payload.page;
        state.totalPages = action.payload.total_pages;

        if (!state.isLocalFilterActive) {
          state.filteredMovies = state.movies;
        }
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Error desconocido";
      })
      // Genres
      .addCase(fetchGenres.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.genres = action.payload;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Error desconocido";
      });
  },
});

export const { applyFilters, clearFilters, setCurrentPage, setSearchQuery } =
  moviesSlice.actions;

export default moviesSlice.reducer;
