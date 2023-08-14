// [{ id, imgSrc, name }, { title, year, coverSrc, id }]

function convertMovieSearchResult(apiMovie) {
  return {
    title: apiMovie.l,
    year: apiMovie.y,
    coverSrc: apiMovie?.i?.imageUrl,
    id: apiMovie.id
  };
}

function convertActorSearchResult(apiActor) {
  return { id: apiActor.id, imgSrc: apiActor?.i?.imageUrl, name: apiActor.l };
}

function convertSearchResult(apiSearchResult) {
  if ("y" in apiSearchResult) {
    return convertMovieSearchResult(apiSearchResult);
  } else {
    return convertActorSearchResult(apiSearchResult);
  }
}

export function convertSearchResults(apiSearchResults) {
  return apiSearchResults.d.map(convertSearchResult);
}
