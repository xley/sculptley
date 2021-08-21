import {
  ArrowIcon,
  ArtSection,
  ArtSectionDetails,
  SectionHeader,
  StyledBlurb,
  StyledButton,
  StyledButtonText,
  StyledCompany,
  StyledDetail,
  StyledDetailDiv,
  StyledTitle,
  Wrapper,
} from "./Art.styles";
import { useHistory } from "react-router-dom";
import useCheckMobileScreen from "../../hooks/mobile/useCheckMobileScreen";

function Art() {
  let history = useHistory();
  let mobile = useCheckMobileScreen();

  function handleViewArt() {
    history.push("/art");
  }

  return (
    <Wrapper mobile={mobile}>
      <SectionHeader mobile={mobile}>ART</SectionHeader>
      <ArtSection>
        <ArtSectionDetails>
          <StyledTitle>LOST CITY</StyledTitle>
          <StyledCompany></StyledCompany>
          <StyledDetailDiv>
            <StyledDetail>2007</StyledDetail>
            <StyledDetail>GOLD COAST</StyledDetail>
          </StyledDetailDiv>
          <StyledBlurb>
            Blurb detailing the art and the story behind the piece. Blurb
            detailing the art and the story behind the piece. Blurb detailing
            the art and the story. Blurb detailing the art and the story behind
            the piece. Blurb detailing ....
          </StyledBlurb>
          <StyledButton onClick={handleViewArt}>
            <StyledButtonText>VIEW ART</StyledButtonText> <ArrowIcon />
          </StyledButton>
        </ArtSectionDetails>
      </ArtSection>
    </Wrapper>
  );
}

export default Art;
