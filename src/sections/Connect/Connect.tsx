import * as Styles from "./Connect.styles";
import emailjs from "emailjs-com";
import { useState } from "react";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import useCheckMobileScreen from "../../hooks/mobile/useCheckMobileScreen";

interface Props {
  connectRef: any;
}

interface Form {
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  message: string;
}

function Connect({ connectRef }: Props) {
  let mobile = useCheckMobileScreen();

  const [form, setForm] = useState<Form>({
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    message: "",
  });
  const [sentForm, setSentForm] = useState<Form>();
  const [formDisabled, setFormDisabled] = useState(false);
  const [recaptchaSuccess, setRecaptchaSuccess] = useState(false);

  const oneFieldRequired = (fieldValue: string): boolean => {
    if (!fieldValue) return true;
    return false;
  };

  const handleFormChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    if (form.contactEmail && form.contactPhone) setFormDisabled(false);
  };

  const onRecaptchaChange = () => {
    setRecaptchaSuccess(true);
  };

  const onRecaptchaError = () => {
    toast.error(
      "Message can not be sent at the moment. please use LinkedIn or Facebook to connect",
      {
        position: toast.POSITION.TOP_CENTER,
      }
    );
  };

  const handleConnectSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!recaptchaSuccess) {
      toast.warning("Message can not be sent until user is verified", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    setFormDisabled(true);
    if (
      !process.env.REACT_APP_EMAILJS_SERVICE_ID ||
      !process.env.REACT_APP_EMAILJS_TEMPLATE_ID ||
      !process.env.REACT_APP_EMAILJS_USER_ID
    ) {
      toast.error(
        "Message can not be sent at the moment. please use LinkedIn or Facebook to connect",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      return;
    }
    if (
      sentForm?.contactEmail === form?.contactEmail ||
      sentForm?.contactPhone === form?.contactPhone
    ) {
      setFormDisabled(true);
      toast.warning(
        `Message has already been sent for ${form.contactName} (${
          form?.contactEmail || form?.contactPhone
        })`,
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target as HTMLFormElement,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          toast.success(
            `Message has successfully been sent for ${form.contactName} (${
              form?.contactEmail || form?.contactPhone
            })`,
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
          console.log(result.text);
          setSentForm(form);
          setFormDisabled(true);
        },
        (error) => {
          toast.error(
            "Message can not be sent at the moment, please use LinkedIn or Facebook to connect",
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
          console.log(error.text);
          setFormDisabled(false);
        }
      );
  };

  return (
    <Styles.Wrapper mobile={mobile} ref={connectRef}>
      <Styles.SectionHeader
        mobile={mobile}
        data-testid="connect-section-header"
      >
        CONNECT
      </Styles.SectionHeader>
      <Styles.ConnectSection>
        <Styles.ConnectLinks>
          <Styles.StyledEmailLink>
            <Styles.ChatMailIcon />
          </Styles.StyledEmailLink>
          <Styles.StyledConnectLink
            href="https://www.linkedin.com/in/brian-crossley-67aa3a61/"
            target="_blank"
          >
            <Styles.LinkedinIcon />
            <Styles.StyledLinkText>
              briancrossley.linkedin
            </Styles.StyledLinkText>
          </Styles.StyledConnectLink>
          <Styles.StyledConnectLink
            href="https://www.facebook.com/Scuptley-103219672040870"
            target="_blank"
          >
            <Styles.FacebookIcon />
            <Styles.StyledLinkText>
              briancrossley.facebook
            </Styles.StyledLinkText>
          </Styles.StyledConnectLink>
        </Styles.ConnectLinks>
        <Styles.ConnectForm onSubmit={handleConnectSubmit}>
          <Styles.StyledFormInput>
            <Styles.PersonIcon />
            <Styles.StyledInput
              type="text"
              placeholder="Name"
              id="contactName"
              name="contactName"
              value={form.contactName}
              onChange={handleFormChange}
              required
            />
          </Styles.StyledFormInput>
          <Styles.StyledFormInput>
            <Styles.PhoneIcon />
            <Styles.StyledInput
              type="tel"
              placeholder="Phone Number"
              id="contactPhone"
              name="contactPhone"
              pattern="[0-9]{10}"
              value={form.contactPhone}
              onChange={handleFormChange}
              required={oneFieldRequired(form.contactEmail)}
            />
          </Styles.StyledFormInput>
          <Styles.StyledFormInput>
            <Styles.EmailIcon />
            <Styles.StyledInput
              type="email"
              placeholder="Email"
              id="contactEmail"
              name="contactEmail"
              value={form.contactEmail}
              onChange={handleFormChange}
              required={oneFieldRequired(form.contactPhone)}
            />
          </Styles.StyledFormInput>
          <Styles.StyledFormInput>
            <Styles.MessageIcon />
            <Styles.StyledTextArea
              placeholder="Message.."
              rows={4}
              id="message"
              name="message"
              value={form.message}
              onChange={handleFormChange}
              required
            />
          </Styles.StyledFormInput>
          {process.env.REACT_APP_RECAPTCHA_SITE_KEY && (
            <Styles.StyleRecaptchaContainer>
              <ReCAPTCHA
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                onChange={onRecaptchaChange}
                onErrored={onRecaptchaError}
              />
            </Styles.StyleRecaptchaContainer>
          )}
          <Styles.StyledSubmitButton>
            <Styles.StyledSubmitInput
              type="submit"
              value="SEND"
              disabled={formDisabled}
            />
            <Styles.ArrowIcon />
          </Styles.StyledSubmitButton>
        </Styles.ConnectForm>
      </Styles.ConnectSection>
    </Styles.Wrapper>
  );
}

export default Connect;
