import { useEffect, useState } from "react";
import { getActor } from "src/api/api";
import { PageLayout } from "../components/PageLayout";
import { ActorHero } from "../components/ActorHero";
import { List } from "../components/List";
import { MovieCard } from "../components/MovieCard";
import { useSearchParams } from "react-router-dom";

export const Actor = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [actor, setActor] = useState(null);
  const [searchParams] = useSearchParams();

  const getActorData = async () => {
    const actorId = searchParams.get("id");
    if (!actorId) {
      return;
    }

    setIsLoading(true);

    const actor = await getActor(actorId);
    setActor(actor);

    setIsLoading(false);
  };

  useEffect(() => {
    getActorData();
  }, []);

  return (
    <PageLayout>
      {isLoading ? (
        <p>Загружаем информацию об актере</p>
      ) : (
        <>
          <ActorHero {...actor.bio} />
          <List title="Фильмы и сериалы" variant="grid">
            {actor.movies.map((movie) => {
              return <MovieCard key={movie.id} {...movie} />;
            })}
          </List>
        </>
      )}
    </PageLayout>
  );
};
