import { useState } from "react";
import { getSearchResults } from "../api/api";

export function useSearch(searchText) {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const getResults = async () => {
    setIsLoading(true);

    if (searchResults !== "") {
      const results = await getSearchResults(searchText);
      setSearchResults(results);
    }

    setIsLoading(false);
  };

  return { isLoading, searchResults, getResults };
}
