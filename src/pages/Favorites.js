import { PageLayout } from "../components/PageLayout";
import { Filter } from "../components/Filter";
import { useState } from "react";
import { List } from "../components/List";
import { ActorCard } from "src/components/ActorCard";
import { MovieCard } from "src/components/MovieCard";
import { favoritesStore } from "src/favoritesStore";

export const Favorites = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const { actors, movies } = favoritesStore.favorites;

  return (
    <PageLayout>
      <Filter activeFilter={activeFilter} onFilterClick={setActiveFilter} />
      {["all", "actors"].includes(activeFilter) ? (
        <List title="Актеры">
          {actors.map((actor) => {
            return <ActorCard key={actor.id} {...actor} />;
          })}
        </List>
      ) : null}
      {["all", "movies"].includes(activeFilter) ? (
        <List title="Фильмы и сериалы">
          {movies.map((movie) => {
            return <MovieCard key={movie.id} {...movie} />;
          })}
        </List>
      ) : null}
    </PageLayout>
  );
};
