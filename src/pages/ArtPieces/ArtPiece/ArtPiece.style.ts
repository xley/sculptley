import styled from "styled-components";
import img from "../../../assets/images/lostcity-sphinx.jpeg";
import { ArrowLeftS } from "@styled-icons/remix-line/ArrowLeftS";

export const ArrowIcon = styled(ArrowLeftS)`
  color: ${(props) => props.theme.palette.primary.contrastText};
  height: 4vh;
  border-bottom: 0;
  align-self: center;
`;

export const Wrapper = styled.div`
  margin: 2rem;
`;

export const StyledTitle = styled.h1`
  font-size: 3rem;
  font-family: sans-serif;
  text-align: center;
  color: ${(props) => props.theme.palette.primary.contrastText};
  margin: 0;
  mix-blend-mode: screen;
  background-color: ${(props) => props.theme.palette.primary.main};
  font-weight: bold;
  width: fit-content;
`;

export const StyledDetails = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: -webkit-fill-available;
`;

export const StyledDetail = styled.h2`
  color: ${(props) => props.theme.palette.primary.contrastText};
  mix-blend-mode: screen;
  background-color: ${(props) => props.theme.palette.primary.main};
  font-weight: bold;
  width: fit-content;
  font-size: 1.25rem;
  font-family: sans-serif;
  text-align: center;
`;

export const StyledButtonText = styled.p`
  border-bottom: 1px solid black;
  font-size: 1.5rem;
`;

export const StyledImage = styled.div`
  background-image: url(${img});
  border: 1px solid ${(props) => props.theme.palette.primary.contrastText};
  background-repeat: no-repeat;
  background-size: cover;
  height: 25rem;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.button`
  color: ${(props) => props.theme.palette.primary.contrastText};
  border: 0;
  font-size: 1.5rem;
  background-color: transparent;
  border-bottom: 1px solid
    ${(props) => props.theme.palette.primary.contrastText};
  align-items: center;
  cursor: pointer;
`;

export const StyledButtonContainer = styled.div`
  position: absolute;
  top: 2.5rem;
  left: 2rem;
  &:hover {
    opacity: 30%;
  }
`;

export const StyledBlurb = styled.p`
  font-size: 1.5rem;
  font-family: sans-serif;
  text-align: justify;
  border-left: 1px solid ${(props) => props.theme.palette.primary.contrastText};
  margin: 2rem 0;
  padding: 0 1rem;
`;
