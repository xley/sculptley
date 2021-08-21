import styled from "styled-components";
import { ArrowRightS } from "@styled-icons/remix-line";
import img from "../../assets/images/lostcity-sphinx.jpeg";

export const ArrowIcon = styled(ArrowRightS)`
  color: ${(props) => props.theme.palette.primary.main};
  height: 4vh;
  border-bottom: 0;
`;

export const Wrapper = styled.div<{ mobile: boolean }>`
  margin: 2rem;
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
`;

export const SectionHeader = styled.h1<{ mobile: boolean }>`
  font-size: 5rem;
  font-family: sans-serif;
  text-align: center;
  margin: 1rem;
  ${(props) =>
    !props.mobile &&
    `
    transform: rotate(-180deg);
    writing-mode: tb-rl;
  `};
`;

export const SectionMobileHeader = styled.h1`
  font-size: 5rem;
  font-family: sans-serif;
  text-align: center;
  margin: 1rem;
`;

export const ArtSection = styled.div`
  border: 1px solid ${(props) => props.theme.palette.primary.contrastText};
  width: 100%;
  min-width: 300px;
  max-height: 400rem;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ArtSectionDetails = styled.div`
  width: 100%;
  padding: 1rem 0;
  background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
  color: ${(props) => props.theme.palette.primary.main};
`;

export const StyledTitle = styled.h1`
  font-size: 4.5rem;
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  margin-bottom: 0.5rem;
`;

export const StyledCompany = styled.h2`
  font-size: 2.25rem;
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  margin: 0 auto 0.75rem auto;
`;

export const StyledDetailDiv = styled.div`
  justify-content: center;
  display: flex;
`;

export const StyledDetail = styled.h3`
  font-size: 1.5rem;
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  display: inline-block;
  text-align: center;
  margin: 1rem;
  width: 15%;
`;

export const StyledBlurb = styled.p`
  font-size: 1.5rem;
  font-family: sans-serif;
  text-align: justify;
  border-left: 1px solid ${(props) => props.theme.palette.primary.main};
  margin: auto;
  padding: 0 1rem;
  width: 40%;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  float: right;
  margin: 1rem;
  border: none;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    opacity: 30%;
  }
`;

export const StyledButtonText = styled.p`
  border-bottom: 1px solid ${(props) => props.theme.palette.primary.main};
  font-size: 1.5rem;
  color: ${(props) => props.theme.palette.primary.main};
`;
