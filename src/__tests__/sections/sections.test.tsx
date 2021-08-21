import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../theme";
import Landing from "../../sections/Landing/Landing";
import About from "../../sections/About/About";
import Art from "../../sections/Art/Art";
import Connect from "../../sections/Connect/Connect";

it("renders landing section", () => {
  render(
    <ThemeProvider theme={theme}>
      <Landing scrollTo={() => console.log("Scroll To Connect")} />
    </ThemeProvider>
  );

  expect(screen.getByText("BRIAN")).toBeInTheDocument();
  expect(screen.getByText("CROSSLEY")).toBeInTheDocument();
  expect(screen.getByText("ARTIST | SCULPTOR | CREATOR")).toBeInTheDocument();
  expect(screen.getByText("CONNECT")).toBeInTheDocument();
});

it("renders about section", () => {
  render(
    <ThemeProvider theme={theme}>
      <About scrollTo={() => console.log("Scroll To Connect")} />
    </ThemeProvider>
  );

  expect(screen.getByText("ABOUT")).toBeInTheDocument();
  expect(screen.getByText("briancrossley")).toBeInTheDocument();
  expect(
    screen.getByText(
      "An artist with years of industry and professional experience, specializing in scenic artistry and sculpting. Taking on projects for movies, bars, clubs, zoo's and much more, Brian Crossley is a well-known name in the industry. Brian enjoys challenging his ability to capture the scenic vision whilst empowering the art with realistic intent."
    )
  ).toBeInTheDocument();
  expect(screen.getByText("CONNECT")).toBeInTheDocument();
});

it("renders art section", () => {
  render(
    <ThemeProvider theme={theme}>
      <Art />
    </ThemeProvider>
  );
  expect(screen.getByText("ART")).toBeInTheDocument();
  expect(screen.getByText("LOST CITY")).toBeInTheDocument();
  expect(screen.getByText("2007")).toBeInTheDocument();
  expect(screen.getByText("GOLD COAST")).toBeInTheDocument();
  expect(screen.getByText("VIEW ART")).toBeInTheDocument();
});

it("renders connect section", () => {
  render(
    <ThemeProvider theme={theme}>
      <Connect connectRef={null} />
    </ThemeProvider>
  );

  expect(screen.getByText("CONNECT")).toBeInTheDocument();
  expect(screen.getByText("briancrossley.linkedin")).toBeInTheDocument();
  expect(screen.getByText("briancrossley.facebook")).toBeInTheDocument();
  expect(screen.getByText("SEND")).toBeInTheDocument();
});
