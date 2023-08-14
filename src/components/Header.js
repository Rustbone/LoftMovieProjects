import { useTheme, ThemeType } from "src/ThemeContext";
import { BrandIcon } from "../icons/BrandIcon";
import { SunIcon } from "../icons/SunIcon";
import { MoonIcon } from "../icons/MoonIcon";
import { BookmarkIcon } from "../icons/BookmarkIcon";
import { SearchIcon } from "../icons/SearchIcon";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <div className="container header">
        <a href="/" className="header__logo">
          <BrandIcon />
        </a>
        <ul className="header__navigation">
          <li className="header__navigation-item">
            <a href="/">
              <SearchIcon />
            </a>
          </li>
          <li className="header__navigation-item">
            <button onClick={toggleTheme}>
              {theme === ThemeType.Light ? <SunIcon /> : <MoonIcon />}
            </button>
          </li>
          <li className="header__navigation-item">
            <a href="/favorites">
              <BookmarkIcon />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
