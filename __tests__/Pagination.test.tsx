import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import moviesReducer from "@/store/moviesSlice";
import { Pagination } from "@/components/pagination/Pagination";

describe("Pagination Component", () => {
  let mockStore: EnhancedStore;

  beforeEach(() => {
    const initialState = {
      moviesStore: {
        movies: [],
        status: "idle" as "idle",
        error: null,
        genres: [],
        filteredMovies: [],
        filters: {},
        page: 1,
        totalPages: 5,
        searchQuery: "",
        isLocalFilterActive: false,
      },
    };

    mockStore = configureStore({
      reducer: {
        moviesStore: moviesReducer,
      },
      preloadedState: initialState,
    });
  });

  it("debería renderizar los botones de paginación", () => {
    render(
      <Provider store={mockStore}>
        <Pagination />
      </Provider>
    );

    expect(screen.getByText("Anterior")).toBeTruthy();
    expect(screen.getByText("Siguiente")).toBeTruthy();
  });

  it("debería disparar setCurrentPage cuando se hace click en una página", () => {
    render(
      <Provider store={mockStore}>
        <Pagination />
      </Provider>
    );

    const nextButton = screen.getByText("Siguiente");
    expect(nextButton).toBeTruthy();

    fireEvent.click(nextButton);

    const updatedState = mockStore.getState().moviesStore.page;
    expect(updatedState).toBe(2);
  });
});
