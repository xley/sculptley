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
import { LostCity } from "../../art/LostCity/LostCity";

function Art() {
  let history = useHistory();
  let mobile = useCheckMobileScreen();
  let art = LostCity;

  function handleViewArt() {
    history.push(`/art/${art.route}`);
  }

  return (
    <Wrapper mobile={mobile}>
      <SectionHeader mobile={mobile}>ART</SectionHeader>
      <ArtSection>
        <ArtSectionDetails>
          <StyledTitle>{art.title}</StyledTitle>
          <StyledCompany></StyledCompany>
          <StyledDetailDiv>
            <StyledDetail>{art.date}</StyledDetail>
            <StyledDetail>{art.location}</StyledDetail>
          </StyledDetailDiv>
          <StyledBlurb>{art.blurb}</StyledBlurb>
          <StyledButton onClick={handleViewArt}>
            <StyledButtonText>VIEW ART</StyledButtonText> <ArrowIcon />
          </StyledButton>
        </ArtSectionDetails>
      </ArtSection>
    </Wrapper>
  );
}

export default Art;
