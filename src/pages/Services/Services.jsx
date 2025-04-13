import PageWrapper from "@/components/Layout/PageWrapper/PageWrapper";
import TextWrapper from "@/components/Layout/TextWrapper/TextWrapper";
import ServiceCard from "@/components/Cards/ServiceCard/ServiceCard";
import { ServicesContainer } from "./Services.styles";
import servicesData from "@/data/servicesData.json";
import AnimatedWrapper from "@/components/Layout/AnimatedWrapper/AnimatedWrapper";

function Services() {
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
      </TextWrapper>
      <ServicesContainer>
        {servicesData.map((service) => (
          <AnimatedWrapper style={{ width: "100%" }}>
            <ServiceCard key={service.id} {...service} />
          </AnimatedWrapper>
        ))}
      </ServicesContainer>
    </PageWrapper>
  );
}

export default Services;
