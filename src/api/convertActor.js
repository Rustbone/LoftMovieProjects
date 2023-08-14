import { getActorId } from "./convertMovie";

export function convertActorBio(apiActorBio) {
  return {
    name: apiActorBio.name,
    imgSrc: apiActorBio?.image?.url,
    description: apiActorBio?.miniBios[0]?.text,
    id: getActorId(apiActorBio) // пробросили сущьность актера
  };
}

export function convertActorFilmography(apiActorFilmography) {
  return apiActorFilmography.filmography.map(convertMovie);
}

function convertMovie(apiMovie) {
  return {
    title: apiMovie.title,
    yaer: apiMovie.year,
    coverSrc: apiMovie?.image?.url,
    id: getId(apiMovie.id) // прокидываем СУЩНОСТЬ movie
  };
}

// /title/tt11596192/ -> tt11596192
export function getId(apiMovieId) {
  return apiMovieId.split("/")[2];
}
