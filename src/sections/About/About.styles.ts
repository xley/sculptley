import styled from "styled-components";
import { ArrowRightS } from "@styled-icons/remix-line/ArrowRightS";

export const ArrowIcon = styled(ArrowRightS)`
  color: black;
  height: 4vh;
  border-bottom: 0;
`;

export const Wrapper = styled.div<{ mobile: boolean }>`
  margin: 1rem;
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
`;

export const SectionHeader = styled.h1<{ mobile: boolean }>`
  font-size: 7vh;
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

export const AboutSection = styled.div`
  border: 1px solid black;
  padding: 1rem;
`;

export const StyledTitle = styled.h2`
  font-size: 4vh;
  font-family: sans-serif;
  text-align: center;
`;

export const StyledBlurb = styled.p`
  font-size: 2.5vh;
  font-family: sans-serif;
  text-align: justify;
  border-left: 1px solid black;
  margin: auto;
  padding: 0 1rem;
  width: 40%;
  min-width: 250px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  float: right;
  border: none;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    opacity: 30%;
  }
`;

export const StyledButtonText = styled.p`
  border-bottom: 1px solid black;
  font-size: 2vh;
`;
