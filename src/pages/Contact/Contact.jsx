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
          <h2>Hablemos de tus ideas</h2>
        </AnimatedWrapper>
        <AnimatedWrapper y={0} x={40} delay={0.1}>
          <p>
            ¿Tienes un proyecto en mente o necesitas colaboración para llevar
            tus ideas al siguiente nivel? Completa el formulario o contáctame a
            través de mis redes sociales. Estoy aquí para crear contigo.
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
