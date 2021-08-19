import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 2rem;
`;

export const StyledImage = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
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
