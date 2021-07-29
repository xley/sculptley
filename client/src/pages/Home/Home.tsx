import {
  StyledButton,
  StyledFirstName,
  StyledImage,
  StyledLastName,
  StyledSlogan,
  StyledTitle,
  Wrapper,
} from "./Home.styles";
function Home() {
  return (
    <Wrapper>
      <StyledImage>
        <StyledTitle firstName={"BRIAN"} lastName={"CROSSLEY"}>
          <StyledFirstName>BRIAN</StyledFirstName>
          <StyledLastName>CROSSLEY</StyledLastName>
        </StyledTitle>
        <StyledSlogan>ARTIST | SCULPTOR | CREATOR</StyledSlogan>
        <StyledButton>CONNECT</StyledButton>
      </StyledImage>
    </Wrapper>
  );
}

export default Home;
