import {
  ArrowIcon,
  StyledBlurb,
  StyledButton,
  StyledButtonContainer,
  StyledImage,
  StyledDetails,
  StyledDetail,
  StyledTitle,
  Wrapper,
} from "./ArtPiece.style";
import { useHistory } from "react-router-dom";

function ArtPiece() {
  let history = useHistory();

  function handleBack() {
    history.goBack();
  }

  return (
    <Wrapper>
      <StyledImage>
        <StyledButtonContainer>
          <ArrowIcon />
          <StyledButton onClick={handleBack}>BACK</StyledButton>
        </StyledButtonContainer>
        <StyledTitle>LOST CITY</StyledTitle>
        <StyledDetails>
          <StyledDetail>GOLD COAST</StyledDetail>
        </StyledDetails>
      </StyledImage>
      <StyledDetails>
        <StyledDetail>2007</StyledDetail>
        <StyledDetail>ENTERTAINMENT CENTER</StyledDetail>
      </StyledDetails>
      <StyledBlurb>
        Blurb detailing the art and the story behind the piece. Blurb detailing
        the art and the story behind the piece. Blurb detailing the art and the
        story..
      </StyledBlurb>
    </Wrapper>
  );
}

export default ArtPiece;
