// пригодится на 3-й неделе
// файл будет хранить функции и конфигурацию запросов на backend

import { stall } from "src/utils/stall";
import {
  searchResponse,
  actorBioResponse,
  actorFilmographyResponse,
  movieMetaResponse,
  movieCharactersResponse
} from "./dummyData";
import { convertSearchResults } from "./convertSearchResults";
import { convertActorBio, convertActorFilmography } from "./convertActor";
import { convertMovieMeta, convertMovieCharacters } from "./convertMovie";

// а также функции, эмулируюзие запросы на backend
const isDummyResponse = false;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fb6b20c0d4msh8c6514d727b9d18p133e68jsn430cdb7fb828",
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com"
  }
};

export async function getSearchResults(searchText) {
  if (isDummyResponse) {
    await stall();
    return convertSearchResults(searchResponse);
  }

  try {
    const url = `https://online-movie-database.p.rapidapi.com/auto-complete?q=${encodeURI(
      searchText
    )}`;
    const response = await fetch(url, options);
    const result = await response.json();
    // todo: convertSearchResults
    return convertSearchResults(result);
  } catch (error) {
    console.error(error);
  }
}

export function getActor(actorId) {
  return Promise.all([getActorBio(actorId), getActorFilmography(actorId)]).then(
    (response) => {
      return {
        bio: response[0],
        movies: response[1]
      };
    }
  );
}

async function getActorBio(actorId) {
  if (isDummyResponse) {
    await stall();
    return convertActorBio(actorBioResponse);
  }

  try {
    const url = `https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=${actorId}`;
    const response = await fetch(url, options);
    const result = await response.json();
    // todo: convertSearchResults
    return convertActorBio(result);
  } catch (error) {
    console.error(error);
  }
}

async function getActorFilmography(actorId) {
  if (isDummyResponse) {
    await stall();
    return convertActorFilmography(actorFilmographyResponse);
  }

  try {
    const url = `https://online-movie-database.p.rapidapi.com/actors/get-all-filmography?nconst=${actorId}`;
    const response = await fetch(url, options);
    const result = await response.json();
    // todo: convertSearchResults
    return convertActorFilmography(result);
  } catch (error) {
    console.error(error);
  }
}

export async function getMovie(movieId) {
  const movieMeta = await getMovieMeta(movieId);
  const actors = await getMovieCharacters(movieId, movieMeta.actors);

  return {
    meta: movieMeta,
    actors
  };
}

async function getMovieMeta(movieId) {
  if (isDummyResponse) {
    await stall();
    return convertMovieMeta(movieMetaResponse);
  }

  try {
    const url = `https://online-movie-database.p.rapidapi.com/title/find?q=${movieId}`;
    const response = await fetch(url, options);
    const result = await response.json();
    // todo: convertSearchResults
    return convertMovieMeta(result);
  } catch (error) {
    console.error(error);
  }
}

async function getMovieCharacters(movieId, actorIds) {
  // ['tt1', 'tt2'] -> '&id=tt1&id=tt2'  actorIds.join("&id=")
  if (isDummyResponse) {
    await stall();
    return convertMovieCharacters(movieCharactersResponse);
  }

  try {
    const url = `https://online-movie-database.p.rapidapi.com/title/get-charname-list?tconst=${movieId}&id=${actorIds.join(
      "&id="
    )}`;
    const response = await fetch(url, options);
    const result = await response.json();
    // todo: convertSearchResults
    return convertMovieCharacters(result);
  } catch (error) {
    console.error(error);
  }
}
