const FAVORITES_STORE_KEY = "favorites";

const initialStore = { actors: [], movies: [] };

class FavoritesStore {
  constructor() {
    this.favorites = this.getFavorites();
  }

  addMovie(movie) {
    this.favorites.movies.push(movie); // синхронизируем
    this.sync();
  }

  addActor(actor) {
    this.favorites.actors.push(actor); // синхронизируем
    this.sync();
  }

  sync() {
    localStorage.setItem(FAVORITES_STORE_KEY, JSON.stringify(this.favorites));
  }

  getFavorites() {
    const stored = localStorage.getItem(FAVORITES_STORE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return initialStore;
  }
}

export const favoritesStore = new FavoritesStore();
