import { createContext, useContext, useMemo, useState } from "react";

export const ThemeType = {
  Light: "light",
  Dark: "dark"
};

export const ThemeContext = createContext(ThemeType.Light);

export const ThemeProvider = ({ children, initialTheme = ThemeType.Light }) => {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    setTheme((theme) =>
      theme === ThemeType.Light ? ThemeType.Dark : ThemeType.Light
    );
  };

  const value = useMemo(() => {
    return { theme, toggleTheme };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const themeValue = useContext(ThemeContext);

  if (themeValue === undefined) {
    throw new Error("useTheme должен быть внутри ThemeProvider");
  }

  return themeValue;
};
