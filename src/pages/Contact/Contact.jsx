import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import TextWrapper from "../../components/Layout/TextWrapper/TextWrapper";
import Form from "../../components/Form/Form";
import PrimaryButton from "../../components/UI/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../components/UI/Buttons/SecondaryButton/SecondaryButton";
import { ButtonsContainer } from "./Contact.styles";

function Contact() {
  return (
    <PageWrapper>
      <TextWrapper>
        <h2>Hablemos de tus ideas</h2>
        <p>
          ¿Tienes un proyecto en mente o necesitas colaboración para llevar tus
          ideas al siguiente nivel? Completa el formulario o contáctame a través
          de mis redes sociales. Estoy aquí para crear contigo.
        </p>
        <ButtonsContainer>
          <PrimaryButton>View all projects</PrimaryButton>
          <SecondaryButton>Contáctame</SecondaryButton>
        </ButtonsContainer>
      </TextWrapper>
      <Form />
    </PageWrapper>
  );
}

export default Contact;
