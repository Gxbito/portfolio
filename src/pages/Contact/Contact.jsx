import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import TextWrapper from "../../components/Layout/TextWrapper/TextWrapper";
import Form from "../../components/Form/Form";
import PrimaryButton from "../../components/UI/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../components/UI/Buttons/SecondaryButton/SecondaryButton";
import { ButtonsContainer } from "./Contact.styles";
import AnimatedWrapper from "../../components/Layout/AnimatedWrapper/AnimatedWrapper";

function Contact() {
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
            <PrimaryButton to="/projects">View all projects</PrimaryButton>
          </AnimatedWrapper>
          <AnimatedWrapper delay={0.1}>
            <SecondaryButton to="/contact">Contáctame</SecondaryButton>
          </AnimatedWrapper>
        </ButtonsContainer>
      </TextWrapper>
      <Form />
    </PageWrapper>
  );
}

export default Contact;
