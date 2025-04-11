import {
  AboutHeroContainer,
  TimelineContainer,
  TimelineCardContainer,
} from "./About.styles";
import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import PreviewSection from "../../components/Layout/PreviewSection/PreviewSection";
import TextWrapper from "../../components/Layout/TextWrapper/TextWrapper";
import TimelineCard from "../../components/Cards/TimelineCard/TimelineCard";
import StackCard from "../../components/Cards/StackCard/StackCard";
import Timeline from "../../components/UI/Timeline/Timeline";
import HeroImage from "../../assets/images/Argentina-flag.jpg";
import timelineData from "../../data/timelineData.json";

function About() {
  return (
    <PageWrapper>
      <AboutHeroContainer>
        <img src={HeroImage} alt="argentina" />
        <TextWrapper>
          <h2>Meeting The Creator</h2>
          <p>
            Soy Gabriel Martínez, desarrollador frontend con más de 2 años de
            experiencia creando interfaces intuitivas, atractivas y optimizadas.
            Mi pasión por el diseño y la tecnología me ha llevado a dominar
            herramientas modernas como React, Material UI y Figma.
          </p>
          <p>
            Me especializo en transformar ideas en productos digitales claros y
            accesibles, siempre con un enfoque en la experiencia del usuario. Mi
            objetivo es crear aplicaciones que no solo sean eficientes, sino que
            también generen un impacto positivo en quienes las utilizan
          </p>
        </TextWrapper>
      </AboutHeroContainer>
      <TimelineContainer>
        <TextWrapper>
          <h3>Mi Trayectoria Profesional</h3>
          <p>
            Cada paso en mi carrera ha sido una oportunidad para aprender y
            crecer. Desde proyectos iniciales que me enseñaron las bases del
            desarrollo web, hasta colaboraciones más desafiantes en las que
            perfeccioné mis habilidades, cada experiencia ha moldeado mi enfoque
            profesional
          </p>
        </TextWrapper>

        <Timeline />
        <TimelineCardContainer>
          {timelineData.map((tech) => (
            <TimelineCard key={tech.id} {...tech} />
          ))}
        </TimelineCardContainer>
      </TimelineContainer>
      <PreviewSection sectionType="works" />
      <PreviewSection sectionType="projects" />
      <PreviewSection sectionType="certificates" />
      <StackCard />
    </PageWrapper>
  );
}

export default About;
