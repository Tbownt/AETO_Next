interface VoteAverageInputProps {
  voteAverage: number;
  onChangeVoteAverage: (value: number) => void;
}

export const VoteAverageInput = ({
  voteAverage,
  onChangeVoteAverage,
}: VoteAverageInputProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">
      Puntuación mínima
    </label>
    <input
      type="number"
      value={voteAverage}
      onChange={(e) => onChangeVoteAverage(Number(e.target.value))}
      min="1"
      max="10"
      step="0.1"
      className="mt-1 p-2 border rounded w-full"
    />
  </div>
);
