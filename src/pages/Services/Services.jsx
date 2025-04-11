import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import TextWrapper from "../../components/Layout/TextWrapper/TextWrapper";
import ServiceCard from "../../components/Cards/ServiceCard/ServiceCard";
import { ServicesContainer } from "./Services.styles";
import servicesData from "../../data/servicesData.json";

function Services() {
  return (
    <PageWrapper>
      <TextWrapper>
        <h2>Hablemos de tus ideas</h2>
        <p>
          ¿Tienes un proyecto en mente o necesitas colaboración para llevar tus
          ideas al siguiente nivel? Completa el formulario o contáctame a través
          de mis redes sociales. Estoy aquí para crear contigo.
        </p>
      </TextWrapper>
      <ServicesContainer>
        {servicesData.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </ServicesContainer>
    </PageWrapper>
  );
}

export default Services;
