interface GenreSelectProps {
  genres: { id: number; name: string }[];
  selectedGenre: number | "";
  onSelectGenre: (genreId: number | "") => void;
}

export const GenreSelect = ({
  genres,
  selectedGenre,
  onSelectGenre,
}: GenreSelectProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">Género</label>
    <select
      value={selectedGenre}
      onChange={(e) =>
        onSelectGenre(e.target.value === "" ? "" : Number(e.target.value))
      }
      className="mt-1 p-2 border rounded w-full"
    >
      <option value="">Selecciona un género</option>
      {genres.length > 0
        ? genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))
        : "Loading"}
    </select>
  </div>
);
