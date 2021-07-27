import styled from "styled-components";
import { PersonFill } from "@styled-icons/bootstrap/PersonFill";
import { Phone } from "@styled-icons/boxicons-regular/Phone";
import { Email } from "@styled-icons/entypo/Email";
import { MessageDetail } from "@styled-icons/boxicons-regular/MessageDetail";
import { Linkedin } from "@styled-icons/bootstrap/Linkedin";
import { Facebook } from "@styled-icons/entypo-social/Facebook";

export const PersonIcon = styled(PersonFill)`
  color: black;
  height: 5vh;
`;

export const PhoneIcon = styled(Phone)`
  color: black;
  height: 5vh;
`;

export const EmailIcon = styled(Email)`
  color: black;
  height: 5vh;
`;

export const MessageIcon = styled(MessageDetail)`
  color: black;
  height: 5vh;
`;

export const LinkedinIcon = styled(Linkedin)`
  color: black;
  height: 5vh;
`;

export const FacebookIcon = styled(Facebook)`
  color: black;
  height: 5vh;
`;

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

export const ConnectSection = styled.div`
  border: 1px solid black;
  padding: 1rem;
  width: 100%;
`;

export const ConnectForm = styled.div`
  width: 100%;
`;

export const StyledFormInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  font-size: 1.5rem;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
  ::placeholder {
    color: black;
  }
`;

export const StyledTextArea = styled.textarea`
  font-size: 1.5rem;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
  ::placeholder {
    color: black;
  }
`;
