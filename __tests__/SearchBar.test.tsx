import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { SearchBar } from "@/components/SearchBar";
import { store } from "@/store/store";

describe("SearchBar Component", () => {
  it("Debería encontrar el input en Searchbar", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    expect(screen.getByPlaceholderText("Buscar...")).toBeTruthy();
  });

  it("Debería disparar acciones cuando se escriba en el searchBar", async () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText("Buscar..."), {
      target: { value: "Avengers" },
    });

    await waitFor(() => {
      expect(store.getState().moviesStore.searchQuery).toBe("Avengers");
    });
  });
});
