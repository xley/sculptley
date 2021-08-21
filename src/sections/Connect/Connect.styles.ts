import styled from "styled-components";
import { PersonFill } from "@styled-icons/bootstrap";
import { Phone } from "@styled-icons/boxicons-regular";
import { Email } from "@styled-icons/entypo";
import { MessageDetail } from "@styled-icons/boxicons-regular";
import { Linkedin } from "@styled-icons/bootstrap";
import { Facebook } from "@styled-icons/entypo-social";
import { ChatMail } from "@styled-icons/fluentui-system-regular";
import { ArrowRightS } from "@styled-icons/remix-line";

export const ArrowIcon = styled(ArrowRightS)`
  color: black;
  height: 4vh;
  border-bottom: 0;
`;

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
  color: #0077b7;
  height: 5vh;
  margin: 1rem;
`;

export const FacebookIcon = styled(Facebook)`
  color: #3c5a99;
  height: 5vh;
  margin: 1rem;
`;

export const ChatMailIcon = styled(ChatMail)`
  color: black;
  height: 24vh;
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

export const ConnectSection = styled.div`
  border: 1px solid black;
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ConnectForm = styled.form`
  width: auto;
`;

export const StyledFormInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledInput = styled.input`
  font-size: 1.5rem;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid black;
  border-radius: 1rem;
  width: inherit;
  ::placeholder {
    color: black;
  }
`;

export const StyledTextArea = styled.textarea`
  font-size: 1.5rem;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid black;
  width: inherit;
  border-radius: 1rem;
  ::placeholder {
    color: black;
  }
`;

export const ConnectLinks = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const StyledEmailLink = styled.a`
  margin: 2rem;
`;

export const StyledConnectLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  cursor: auto;
  text-decoration: none;
  cursor: pointer;
  :visited {
    color: inherit;
  }
`;

export const StyledLinkText = styled.p`
  font-size: 1.2rem;
  margin: 1rem;
  font-family: "sans-serif";
`;

export const StyledSubmitButton = styled.div`
  display: flex;
  align-items: center;
  float: right;
  margin: 1rem;
  &:hover {
    opacity: 30%;
  }
`;

export const StyledSubmitInput = styled.input`
  border: none;
  cursor: pointer;
  background-color: transparent;
  border-bottom: 1px solid black;
  font-size: 1.5rem;
`;

export const StyleRecaptchaContainer = styled.div`
  display: flex;
  justify-content: center;
`;
