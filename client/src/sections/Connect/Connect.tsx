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

interface Props {
  connectRef: any;
}

function Connect({ connectRef }: Props) {
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
        <ConnectForm>
          <StyledFormInput>
            <PersonIcon />
            <StyledInput type="text" placeholder="Name" />
          </StyledFormInput>
          <StyledFormInput>
            <PhoneIcon />
            <StyledInput type="text" placeholder="Phone" />
          </StyledFormInput>
          <StyledFormInput>
            <EmailIcon />
            <StyledInput type="text" placeholder="Email" />
          </StyledFormInput>
          <StyledFormInput>
            <MessageIcon />
            <StyledTextArea placeholder="Message.." rows={4} />
          </StyledFormInput>
        </ConnectForm>
      </ConnectSection>
    </Wrapper>
  );
}

export default Connect;
