import { render, screen } from "@testing-library/react";
import { PageLayout } from "../components/PageLayout";
import "@testing-library/jest-dom";
import { ThemeProvider, ThemeType } from "../ThemeContext";

test("render whis light styles for light theme", () => {
  render(<PageLayout />, {
    wrapper: ({ children }) => {
      return (
        <ThemeProvider initialTheme={ThemeType.Light}>{children}</ThemeProvider>
      );
    }
  });

  const layout = screen.getByTestId("page-layout");

  expect(layout).toHaveClass("theme-light");
});

test("render whis dark styles for dark theme", () => {
  render(<PageLayout />, {
    wrapper: ({ children }) => {
      return (
        <ThemeProvider initialTheme={ThemeType.Dark}>{children}</ThemeProvider>
      );
    }
  });

  const layout = screen.getByTestId("page-layout");

  expect(layout).toHaveClass("theme-dark");
});
