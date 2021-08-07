import {
  Wrapper,
  SectionHeader,
  ConnectSection,
  StyledInput,
  PersonIcon,
  StyledTextArea,
  PhoneIcon,
  EmailIcon,
  MessageIcon,
  ConnectForm,
  StyledFormInput,
  ConnectLinks,
  StyledEmailLink,
  ChatMailIcon,
  LinkedinIcon,
  FacebookIcon,
  StyledLinkText,
  StyledConnectLink,
} from "./Connect.styles";
import emailjs from "emailjs-com";

interface Props {
  connectRef: any;
}

function Connect({ connectRef }: Props) {
  const handleConnectSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (
      !process.env.REACT_APP_EMAILJS_SERVICE_ID ||
      !process.env.REACT_APP_EMAILJS_TEMPLATE_ID ||
      !process.env.REACT_APP_EMAILJS_USER_ID
    )
      return; // TODO: Throw an error stating email can not be sent
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target as HTMLFormElement,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          // TODO: Confirm Email has been sent
          console.log(result.text);
        },
        (error) => {
          // TODO: Throw error message stating email could not be sent.
          // Redirect to linkedin or facebook
          console.log(error.text);
        }
      );
  };

  return (
    <Wrapper ref={connectRef}>
      <SectionHeader>CONNECT</SectionHeader>
      <ConnectSection>
        <ConnectLinks>
          <StyledEmailLink>
            <ChatMailIcon />
          </StyledEmailLink>
          <StyledConnectLink
            href="https://www.linkedin.com/in/brian-crossley-67aa3a61/"
            target="_blank"
          >
            <LinkedinIcon />
            <StyledLinkText>briancrossley.linkedin</StyledLinkText>
          </StyledConnectLink>
          <StyledConnectLink
            href="https://www.facebook.com/Scuptley-103219672040870"
            target="_blank"
          >
            <FacebookIcon />
            <StyledLinkText>briancrossley.facebook</StyledLinkText>
          </StyledConnectLink>
        </ConnectLinks>
        <ConnectForm onSubmit={handleConnectSubmit}>
          <StyledFormInput>
            <PersonIcon />
            <StyledInput
              type="text"
              placeholder="Name"
              id="contact_name"
              name="contact_name"
            />
          </StyledFormInput>
          <StyledFormInput>
            <PhoneIcon />
            <StyledInput
              type="text"
              placeholder="Phone"
              id="contact_phone"
              name="contact_phone"
            />
          </StyledFormInput>
          <StyledFormInput>
            <EmailIcon />
            <StyledInput
              type="text"
              placeholder="Email"
              id="contact_email"
              name="contact_email"
            />
          </StyledFormInput>
          <StyledFormInput>
            <MessageIcon />
            <StyledTextArea
              placeholder="Message.."
              rows={4}
              id="message"
              name="message"
            />
          </StyledFormInput>
          <input type="submit" value="Send" />
        </ConnectForm>
      </ConnectSection>
    </Wrapper>
  );
}

export default Connect;
