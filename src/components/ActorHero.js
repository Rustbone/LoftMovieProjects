import { BookmarkIcon } from "src/icons/BookmarkIcon";
import { useModal } from "../hooks/useModal";
import { favoritesStore } from "../favoritesStore";

export const ActorHero = ({ name, imgSrc, description, id }) => {
  const { showModal, Modal } = useModal();

  const addActorToFavorites = () => {
    favoritesStore.addActor({ id, imgSrc, name });

    showModal();
  };

  return (
    <section className="actor-hero">
      <img
        src={imgSrc ?? `./assets/images/actor-placeholder.png`}
        className="actor-hero__img"
        loading="lazy"
        alt={name}
      />
      <div className="actor-info">
        <div className="actor-info__name">
          <h1 className="h1-text text-nowrap">{name}</h1>
          <button onClick={addActorToFavorites}>
            <BookmarkIcon />
          </button>
        </div>
        {description ? (
          <div className="actor-info__description">
            <p className="body-text">{description}</p>
            <button className="tag-text">Подробнее</button>
          </div>
        ) : null}
      </div>
      <Modal />
    </section>
  );
};
