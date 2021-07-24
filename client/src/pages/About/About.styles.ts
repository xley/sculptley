import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 40px;
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
  float: right;
  margin: 1rem;
`;
