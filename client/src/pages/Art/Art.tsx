import {
  ArrowIcon,
  ArtSection,
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

function Art() {
  return (
    <Wrapper>
      <SectionHeader>ART</SectionHeader>
      <ArtSection>
        <StyledTitle>TITLE</StyledTitle>
        <StyledCompany>COMPANY</StyledCompany>
        <StyledDetailDiv>
          <StyledDetail>DATE</StyledDetail>
          <StyledDetail>LOCATION</StyledDetail>
        </StyledDetailDiv>
        <StyledBlurb>
          Blurb detailing the art and the story behind the piece. Blurb
          detailing the art and the story behind the piece. Blurb detailing the
          art and the story..
        </StyledBlurb>
        <StyledButton>
          <StyledButtonText>VIEW ART</StyledButtonText> <ArrowIcon />
        </StyledButton>
      </ArtSection>
    </Wrapper>
  );
}

export default Art;
