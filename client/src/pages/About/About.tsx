import {
  Wrapper,
  SectionHeader,
  AboutSection,
  StyledBlurb,
  StyledButton,
  StyledTitle,
} from "./About.styles";
function About() {
  return (
    <Wrapper>
      <SectionHeader>ABOUT</SectionHeader>
      <AboutSection>
        <StyledTitle>briancrossley</StyledTitle>
        <StyledBlurb>
          An artist with years of industry and professional experience,
          specializing in scenic artistry and sculpting. Taking on projects for
          movies, bars, clubs, zoo's and much more, Brian Crossley is a
          well-known name in the industry. Brian enjoys challenging his ability
          to capture the scenic vision whilst empowering the art with realistic
          intent.
        </StyledBlurb>
        <StyledButton>Connect</StyledButton>
      </AboutSection>
    </Wrapper>
  );
}

export default About;
