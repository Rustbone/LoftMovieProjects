import { useEffect, useState } from "react";
import { getMovie } from "src/api/api";
import { PageLayout } from "../components/PageLayout";
import { List } from "../components/List";
import { MovieHero } from "../components/MovieHero";
import { ActorCard } from "../components/ActorCard";
import { useSearchParams } from "react-router-dom";

export const Movie = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [searchParams] = useSearchParams();

  const getMovieData = async () => {
    const movieId = searchParams.get("id");
    if (!movieId) {
      return;
    }

    setIsLoading(true);

    const movie = await getMovie(movieId);
    setMovie(movie);

    setIsLoading(false);
  };

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <PageLayout>
      {isLoading ? (
        <p>Загружаем информацию о фильме</p>
      ) : (
        <>
          <MovieHero {...movie.meta} />
          <List title="Актеры" variant="column">
            {movie.actors.map((actor) => {
              return <ActorCard key={actor.id} {...actor} />;
            })}
          </List>
        </>
      )}
    </PageLayout>
  );
};
