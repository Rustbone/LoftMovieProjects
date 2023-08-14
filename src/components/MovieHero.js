import { BookmarkIcon } from "src/icons/BookmarkIcon";
import { useModal } from "../hooks/useModal";
import { favoritesStore } from "../favoritesStore";

export const MovieHero = ({ title, coverSrc, year, time, id }) => {
  const { showModal, Modal } = useModal();

  const addMovieToFavorites = () => {
    favoritesStore.addMovie({ title, year, coverSrc, id });

    showModal();
  };

  return (
    <section className="movie-hero">
      <img
        src={coverSrc ?? `./asets/images/movie-placeholder.jpg`}
        className="movie-hero__img"
        loading="lazy"
        alt={title}
      />
      <div className="movie-info">
        <div className="movie-info__name">
          <h1 className="h1-text text-nowrap">{title}</h1>
          <button onClick={addMovieToFavorites}>
            <BookmarkIcon />
          </button>
        </div>
        <div className="movie-info__description body-text">
          <div>
            <span>Год</span>
            <span>{year}</span>
          </div>
          <div>
            <span>Время</span>
            <span>{time} мин.</span>
          </div>
        </div>
      </div>
      <Modal />
    </section>
  );
};
