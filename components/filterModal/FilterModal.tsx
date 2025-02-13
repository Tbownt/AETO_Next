import { useState, useEffect } from "react";
import Modal from "react-modal";
import { useAppDispatch, useAppSelector } from "@/hooks/useStoreHooks";
import { fetchGenres } from "@/store/thunks";
import { FilterModalProps } from "@/types";
import { applyFilters, clearFilters } from "@/store/moviesSlice";
import { GenreSelect } from "./GenreSelect";
import { ReleaseDateSelect } from "./ReleaseDateSelect";
import { VoteAverageInput } from "./VoteAverageInput";
import { FiltersActions } from "./FilterActions";

export const FilterModal = ({ isOpen, onRequestClose }: FilterModalProps) => {
  const dispatch = useAppDispatch();
  const { genres } = useAppSelector((state) => state.moviesStore);

  useEffect(() => {
    if (isOpen) {
      if (genres.length < 1) {
        dispatch(fetchGenres());
      }
    }
  }, [isOpen, dispatch]);

  const [selectedGenre, setSelectedGenre] = useState<number | "">("");
  const [releaseDate, setReleaseDate] = useState("");
  const [voteAverage, setVoteAverage] = useState(0);

  const handleApply = () => {
    const filters = {
      genre: selectedGenre !== "" ? selectedGenre : undefined,
      releaseDate: releaseDate !== "" ? releaseDate : undefined,
      voteAverage: voteAverage > 0 ? voteAverage : undefined,
    };
    dispatch(applyFilters(filters));
    onRequestClose();
  };

  const handleClear = () => {
    setSelectedGenre("");
    setReleaseDate("");
    setVoteAverage(0);
    dispatch(clearFilters());
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Filtros de Búsqueda"
      className="modal text-black"
      overlayClassName="overlay"
      ariaHideApp={false}
    >
      <h2 className="text-xl font-bold mb-4">Filtros de Búsqueda</h2>
      <hr />
      <div className="space-y-4 pt-2">
        <GenreSelect
          genres={genres}
          selectedGenre={selectedGenre}
          onSelectGenre={setSelectedGenre}
        />
        <ReleaseDateSelect
          selectedReleaseDate={releaseDate}
          onSelectReleaseDate={setReleaseDate}
        />
        <VoteAverageInput
          voteAverage={voteAverage}
          onChangeVoteAverage={setVoteAverage}
        />
      </div>
      <FiltersActions onApply={handleApply} onClear={handleClear} />
    </Modal>
  );
};
