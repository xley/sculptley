import { ArtSection, SectionHeader, StyledBlurb, StyledButton, StyledCompany, StyledDetail, StyledDetailDiv, StyledTitle, Wrapper } from "./Art.styles";

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
                    Blurb detailing the art and the
                    story behind the piece. Blurb 
                    detailing the art and the story 
                    behind the piece. Blurb detailing 
                    the art and the story..
                </StyledBlurb>
                <StyledButton>VIEW ART</StyledButton> {/* Missing > icon, I figure &gt; isn't what is desired*/}
            </ArtSection>
        </Wrapper>
    );
}

export default Art;