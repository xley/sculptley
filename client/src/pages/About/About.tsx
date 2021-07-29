import { MouseEventHandler } from "react";
import {
  Wrapper,
  SectionHeader,
  AboutSection,
  StyledBlurb,
  StyledButton,
  StyledTitle,
} from "./About.styles";

interface Props {
  scrollTo: MouseEventHandler;
}

function About({ scrollTo }: Props) {
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
        <StyledButton onClick={scrollTo}>Connect</StyledButton>
      </AboutSection>
    </Wrapper>
  );
}

export default About;
