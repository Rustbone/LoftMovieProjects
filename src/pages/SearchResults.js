import { useEffect } from "react";
import { useSearch } from "../hooks/useSearch";
import { List } from "../components/List";
import { MovieCard } from "../components/MovieCard";
import { ActorCard } from "../components/ActorCard";
import { PageLayout } from "../components/PageLayout";
import { useSearchParams } from "react-router-dom";

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("searchText");

  const { isLoading, searchResults, getResults } = useSearch(searchText);
  const actors = searchResults.filter((searchResult) => {
    return !("year" in searchResult);
  });
  const movies = searchResults.filter((searchResult) => {
    return "year" in searchResult;
  });

  useEffect(() => {
    getResults();
  }, []);

  return (
    <PageLayout>
      {isLoading ? (
        <h2 className="h2-text search-results__title">
          Загружаем результаты поиска...
        </h2>
      ) : (
        <>
          <h2 className="h2-text search-results__title">
            Вы искали, а мы нашли:
          </h2>
          <List title="Актеры" variant="column">
            {actors.map((actor) => {
              return <ActorCard key={actor.id} {...actor} />;
            })}
          </List>
          <List title="Фильмы и сериалы" variant="grid">
            {movies.map((movie) => {
              return <MovieCard key={movie.id} {...movie} />;
            })}
          </List>
        </>
      )}
    </PageLayout>
  );
};
