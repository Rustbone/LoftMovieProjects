import { getId as getMovieId } from "./convertActor";

export function convertMovieMeta(apiMovieMeta) {
  const movie = apiMovieMeta.results[0];

  return {
    title: movie.title,
    coverSrc: movie?.image?.url,
    year: movie.year,
    time: movie.runningTimeInMinutes,
    actors: movie.principals.map(getActorId),
    id: getMovieId(movie.id) // а здесь нет
  };
}

export function getActorId(apiActor) {
  return getId(apiActor.id);
}

export function convertMovieCharacters(apiMovieCharacters) {
  return Object.values(apiMovieCharacters).map(convertActor);
}

function convertActor(apiActor) {
  return {
    id: getId(apiActor.name.id),
    imgSrc: apiActor.name?.image?.url,
    name: apiActor.name.name
  };
}

function getId(apiId) {
  return apiId.split("/")[2];
}
