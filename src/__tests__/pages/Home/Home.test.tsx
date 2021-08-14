import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Home from "../../../pages/Home/Home";
import { theme } from "../../../theme";

it("renders Home page", () => {
  render(
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );

  expect(screen.getByText("BRIAN")).toBeInTheDocument();
  expect(screen.getByText("CROSSLEY")).toBeInTheDocument();
  expect(screen.getByText("ABOUT")).toBeInTheDocument();
  expect(screen.getByText("ART")).toBeInTheDocument();
  expect(screen.getByTestId("connect-section-header")).toBeInTheDocument();
});
