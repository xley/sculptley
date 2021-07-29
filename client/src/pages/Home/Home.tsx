import {
  StyledButton,
  StyledFirstName,
  StyledImage,
  StyledLastName,
  StyledSlogan,
  StyledTitle,
  Wrapper,
} from "./Home.styles";
import { ArrowRightS } from "@styled-icons/remix-line/ArrowRightS";
import { MouseEventHandler } from "react";

interface Props {
  scrollTo: MouseEventHandler;
}

function Home({ scrollTo }: Props) {
  return (
    <Wrapper>
      <StyledImage>
        <StyledTitle firstName={"BRIAN"} lastName={"CROSSLEY"}>
          <StyledFirstName>BRIAN</StyledFirstName>
          <StyledLastName>CROSSLEY</StyledLastName>
        </StyledTitle>
        <StyledSlogan>ARTIST | SCULPTOR | CREATOR</StyledSlogan>
        <StyledButton onClick={scrollTo}>CONNECT</StyledButton>
      </StyledImage>
    </Wrapper>
  );
}

export default Home;
