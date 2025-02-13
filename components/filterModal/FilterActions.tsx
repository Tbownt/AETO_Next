interface FiltersActionsProps {
  onApply: () => void;
  onClear: () => void;
}

export const FiltersActions = ({ onApply, onClear }: FiltersActionsProps) => (
  <div className="mt-6 flex justify-end space-x-4">
    <button
      onClick={onClear}
      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
    >
      Limpiar
    </button>
    <button
      onClick={onApply}
      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
    >
      Aplicar
    </button>
  </div>
);
