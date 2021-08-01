import styled from "styled-components";
import img from "../../assets/images/atlantis-sculptors.jpg";
import { ArrowRightS } from "@styled-icons/remix-line/ArrowRightS";

export const ArrowIcon = styled(ArrowRightS)`
  color: white;
  height: 4vh;
  border-bottom: 0;
  align-self: center;
`;

export const Wrapper = styled.div`
  margin: 2rem;
`;

export const StyledTitle = styled.div<{ firstName: string; lastName: string }>`
  font-size: 3rem;
  font-family: sans-serif;
  text-align: left;
`;

export const StyledFirstName = styled.h1`
  color: ${(props) => props.theme.palette.primary.contrastText};
  margin: 0;
  mix-blend-mode: screen;
  background-color: ${(props) => props.theme.palette.primary.main};
  font-weight: bold;
  width: fit-content;
`;

export const StyledLastName = styled.h1`
  color: ${(props) => props.theme.palette.primary.contrastText};
  margin: 0;
  mix-blend-mode: screen;
  background-color: ${(props) => props.theme.palette.primary.main};
  font-weight: bold;
  width: fit-content;
`;

export const StyledSlogan = styled.h2`
  color: ${(props) => props.theme.palette.primary.contrastText};
  mix-blend-mode: screen;
  background-color: ${(props) => props.theme.palette.primary.main};
  font-weight: bold;
  width: fit-content;
  font-size: 3rem;
  font-family: sans-serif;
  text-align: left;
`;

export const StyledButtonText = styled.p`
  border-bottom: 1px solid black;
  font-size: 1.5rem; ;
`;

export const StyledImage = styled.div`
  background-image: url(${img});
  background-position: right;
  padding: 18px 2%;
  border: 1px solid black;
  background-size: auto;
  background-repeat: no-repeat;
  min-width: 500px;
`;

export const StyledButton = styled.button`
  color: white;
  border: 0;
  font-size: 1.5rem;
  background-color: transparent;
  border-bottom: 1px solid white;
  align-items: center;
  cursor: pointer;
`;

export const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
