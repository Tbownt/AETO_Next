import { Genre, MoviesResponse } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.NEXT_PUBLIC_MOVIES_API;

const options = {
  accept: "application/json",
  Authorization: `Bearer ${API_KEY}`,
};

export const searchMovies = createAsyncThunk<
  MoviesResponse,
  { query: string; page: number }
>("movies/searchMovies", async ({ query, page }) => {
  const response = await axios.get(`${API_BASE_URL}/search/movie`, {
    params: { query, page },
    headers: options,
  });
  return response.data;
});

export const fetchGenres = createAsyncThunk<Genre[]>(
  "movies/fetchGenres",
  async () => {
    const response = await axios.get(`${API_BASE_URL}/genre/movie/list`, {
      headers: options,
    });
    return response.data.genres;
  }
);
