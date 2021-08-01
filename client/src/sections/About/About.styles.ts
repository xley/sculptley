import styled from "styled-components";
import { ArrowRightS } from "@styled-icons/remix-line/ArrowRightS";

export const ArrowIcon = styled(ArrowRightS)`
  color: black;
  height: 4vh;
  border-bottom: 0;
`;

export const Wrapper = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: row;
`;

export const SectionHeader = styled.h1`
  font-size: 5rem;
  font-family: sans-serif;
  text-align: center;
  writing-mode: tb-rl;
  transform: rotate(-180deg);
  margin: 1rem;
`;

export const AboutSection = styled.div`
  border: 1px solid black;
  padding: 1rem;
`;

export const StyledTitle = styled.h2`
  font-size: 2rem;
  font-family: sans-serif;
  text-align: center;
`;

export const StyledBlurb = styled.p`
  font-size: 1.5rem;
  font-family: sans-serif;
  text-align: justify;
  border-left: 1px solid black;
  margin: auto;
  padding: 0 1rem;
  width: 40%;
  min-width: 300px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  float: right;
  margin: 1rem;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const StyledButtonText = styled.p`
  border-bottom: 1px solid black;
  font-size: 1.5rem;
`;
