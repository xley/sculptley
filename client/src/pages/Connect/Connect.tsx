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
} from "./Connect.styles";

interface Props {
  connectRef: any;
}

function Connect({ connectRef }: Props) {
  return (
    <Wrapper ref={connectRef}>
      <SectionHeader>CONNECT</SectionHeader>
      <ConnectSection>
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
