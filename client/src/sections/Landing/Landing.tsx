import {
  ArrowIcon,
  StyledButton,
  StyledButtonDiv,
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
        <StyledButtonDiv>
          <StyledButton onClick={() => scrollTo()}>Connect</StyledButton>
          <ArrowIcon />
        </StyledButtonDiv>
      </StyledImage>
    </Wrapper>
  );
}

export default Landing;
