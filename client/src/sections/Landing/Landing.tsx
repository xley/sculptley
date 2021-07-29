import {
  StyledButton,
  StyledFirstName,
  StyledImage,
  StyledLastName,
  StyledSlogan,
  StyledTitle,
  Wrapper,
} from "./Landing.styles";

interface Props {
  scrollTo: Function;
}

function Landing({ scrollTo }: Props) {
  return (
    <Wrapper>
      <StyledImage>
        <StyledTitle firstName={"BRIAN"} lastName={"CROSSLEY"}>
          <StyledFirstName>BRIAN</StyledFirstName>
          <StyledLastName>CROSSLEY</StyledLastName>
        </StyledTitle>
        <StyledSlogan>ARTIST | SCULPTOR | CREATOR</StyledSlogan>
        <StyledButton onClick={() => scrollTo()}>CONNECT</StyledButton>
      </StyledImage>
    </Wrapper>
  );
}

export default Landing;
