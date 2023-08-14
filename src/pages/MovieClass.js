import React from "react";
import { getMovie } from "src/api/api";
import { getUrlParam } from "src/Router";
import { PageLayout } from "../components/PageLayout";
import { List } from "../components/List";
import { MovieHero } from "../components/MovieHero";
import { ActorCard } from "../components/ActorCard";

class MovieClass extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      movie: null
    };
  }

  async getMovieData() {
    const movieId = getUrlParam("id");
    if (!movieId) {
      return;
    }

    this.setState({ isLoading: true });

    const movie = await getMovie(movieId);
    this.setState({ movie });

    this.setState({ isLoading: false });
  }

  componentDidMount() {
    this.getMovieData();
  }

  render() {
    const { isLoading, movie } = this.state;

    return (
      <PageLayout>
        {isLoading ? (
          <p>Загружаем информацию о фильме class Component</p>
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
  }
}

export { MovieClass };
