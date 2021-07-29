import styled from "styled-components";
import img from "../../assets/images/atlantis-sculptors.jpg";

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

export const StyledButton = styled.button`
  font-family: sans-serif;
  text-align: left;

  cursor: pointer;
  color: #432df3;
  text-decoration: underline;
  font-size: 1rem;
  outline: none;
  padding: 0 8px;
  border: 1px solid transparent;
  transition: 0.1s ease-in;
  float: right;

  &:hover {
    color: #2512b3;
    transition: 0.15s ease-out;
  }

  &:focus {
    background-color: #efedff;
    border: 1px solid #cec8fa;
    transition: 0.15s ease-out;
  }
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
