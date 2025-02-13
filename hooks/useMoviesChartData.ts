import { useAppSelector } from "@/hooks/useStoreHooks";

export const useMoviesChartData = () => {
  const { filteredMovies } = useAppSelector((state) => state.moviesStore);

  const movieTitles = filteredMovies.map((movie) => movie.title);
  const voteAverages = filteredMovies.map((movie) => movie.vote_average);

  const data = {
    labels: movieTitles,
    datasets: [
      {
        label: "Puntuación de Películas",
        data: voteAverages,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 10, // Puntuaciones de películas van de 0 a 10
      },
    },
  };

  return { data, options };
};
