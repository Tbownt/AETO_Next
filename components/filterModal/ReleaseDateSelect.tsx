interface ReleaseDateSelectProps {
  selectedReleaseDate: string;
  onSelectReleaseDate: (releaseDate: string) => void;
}

export const ReleaseDateSelect = ({
  selectedReleaseDate,
  onSelectReleaseDate,
}: ReleaseDateSelectProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">
      Año de lanzamiento
    </label>
    <select
      value={selectedReleaseDate}
      onChange={(e) => onSelectReleaseDate(e.target.value)}
      className="mt-1 p-2 border rounded w-full"
    >
      <option value="">Selecciona un año</option>
      {[...Array(50)].map((_, i) => {
        const year = new Date().getFullYear() - i;
        return (
          <option key={year} value={year}>
            {year}
          </option>
        );
      })}
    </select>
  </div>
);
