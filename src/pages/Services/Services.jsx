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
          <h2>Let's Turn Your Ideas into Reality</h2>
        </AnimatedWrapper>
        <AnimatedWrapper y={0} x={40} delay={0.1}>
          <p>
            Do you have a project in mind or need a skilled developer to take
            your ideas to the next level? Whether you're looking for a custom
            web solution, a fresh design, or a complete frontend experience, I'm
            here to collaborate with you. Fill out the form or reach out through
            my social channels—let's create something amazing together!
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
