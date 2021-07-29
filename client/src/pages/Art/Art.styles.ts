import styled from "styled-components";

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

export const ArtSection = styled.div`
  border: 1px solid black;
  padding: 1rem;
  width: 100%; // For some reason this is required in my ArtSection but not in your AboutSection. Otherwise there is a gap on the right, couldn't find difference in code.
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
  /* width: 100%; */
`;

export const StyledDetail = styled.h3`
  font-size: 1.5rem;
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  display: inline-block;
  text-align: center;
  margin: 0 auto 0.75rem auto;
  width: 15%;
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
  font-size: 1.5rem;
  float: right;
  margin: 1rem;
  border: none;
  border-bottom: 1px solid black;
  cursor: pointer;
  background-color: transparent;
`;
