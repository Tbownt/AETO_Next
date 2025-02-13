"use client";
import { Bar } from "react-chartjs-2";
import { useMoviesChartData } from "@/hooks/useMoviesChartData";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const MoviesChart = () => {
  const { data, options } = useMoviesChartData();

  return (
    <div className="w-full max-w-2xl h-80 mt-5">
      <Bar data={data} options={options} />
    </div>
  );
};
