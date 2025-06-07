import { useState } from "react";
import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import TextWrapper from "../../components/Layout/TextWrapper/TextWrapper";
import Form from "../../components/Form/Form";
import PrimaryButton from "../../components/UI/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../components/UI/Buttons/SecondaryButton/SecondaryButton";
import { ButtonsContainer } from "./Contact.styles";
import AnimatedWrapper from "../../components/Layout/AnimatedWrapper/AnimatedWrapper";
import { FaRegCopy } from "react-icons/fa6";

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    const email = "gabmz01@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Error al copiar el correo: ", err);
      });
  };

  return (
    <PageWrapper>
      <TextWrapper>
        <AnimatedWrapper y={0} x={40}>
          <h2>Let's Bring Your Ideas to Life</h2>
        </AnimatedWrapper>
        <AnimatedWrapper y={0} x={40} delay={0.1}>
          <p>
            Do you have a project in mind, or are you looking for a
            collaborative partner to elevate your ideas to the next level? Fill
            out the form or reach out to me through my social channels. I'm here
            to create innovative solutions together with you.
          </p>
        </AnimatedWrapper>
        <ButtonsContainer>
          <AnimatedWrapper>
            <PrimaryButton to="/works">View all works</PrimaryButton>
          </AnimatedWrapper>
          <AnimatedWrapper delay={0.1}>
            <SecondaryButton onClick={copyEmailToClipboard}>
              {copied ? "Copied" : "Email"}
              <FaRegCopy />
            </SecondaryButton>
          </AnimatedWrapper>
        </ButtonsContainer>
      </TextWrapper>
      <Form />
    </PageWrapper>
  );
}

export default Contact;
