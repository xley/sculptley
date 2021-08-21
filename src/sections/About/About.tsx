import useCheckMobileScreen from "../../hooks/mobile/useCheckMobileScreen";
import {
  Wrapper,
  SectionHeader,
  AboutSection,
  StyledBlurb,
  StyledButton,
  StyledTitle,
  StyledButtonText,
  ArrowIcon,
} from "./About.styles";

interface Props {
  scrollTo: Function;
}

function About({ scrollTo }: Props) {
  let mobile = useCheckMobileScreen();
  return (
    <Wrapper mobile={mobile}>
      <SectionHeader mobile={mobile}>ABOUT</SectionHeader>
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
        <StyledButton>
          <StyledButtonText onClick={() => scrollTo()}>
            CONNECT
          </StyledButtonText>
          <ArrowIcon />
        </StyledButton>
      </AboutSection>
    </Wrapper>
  );
}

export default About;
