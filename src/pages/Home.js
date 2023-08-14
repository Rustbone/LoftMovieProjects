import { useTheme } from "src/ThemeContext";
import { SearchForm } from "../components/SearchForm";

export const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={`page theme-${theme}`}>
      <main className="search-page">
        <SearchForm />
      </main>
    </div>
  );
};
