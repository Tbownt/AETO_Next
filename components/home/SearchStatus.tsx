import React from "react";

export const SearchStatus = ({
  status,
  error,
}: {
  status: string;
  error: string | null;
}) => {
  if (status === "loading") return <p className="mt-4">Buscando...</p>;
  if (error) return <p className="text-red-500 mt-4">Error: {error}</p>;
  return null;
};
