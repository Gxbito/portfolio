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
import AnimatedWrapper from "../../components/Layout/AnimatedWrapper/AnimatedWrapper";

function About() {
  return (
    <PageWrapper page="about">
      <AboutHeroContainer>
        <AnimatedWrapper>
          <img src={HeroImage} alt="argentina" />
        </AnimatedWrapper>

        <TextWrapper>
          <AnimatedWrapper y={0} x={40}>
            <h2>Meeting the creator</h2>
          </AnimatedWrapper>
          <AnimatedWrapper y={0} x={40} delay={0.1}>
            <p>
              Soy Gabriel Martínez, desarrollador frontend con más de 2 años de
              experiencia creando interfaces intuitivas, atractivas y
              optimizadas. Mi pasión por el diseño y la tecnología me ha llevado
              a dominar herramientas modernas como React, Material UI y Figma.
              <br />
              <br />
              Me especializo en transformar ideas en productos digitales claros
              y accesibles, siempre con un enfoque en la experiencia del
              usuario. Mi objetivo es crear aplicaciones que no solo sean
              eficientes, sino que también generen un impacto positivo en
              quienes las utilizan
            </p>
          </AnimatedWrapper>
        </TextWrapper>
      </AboutHeroContainer>
      <TimelineContainer>
        <TextWrapper>
          <AnimatedWrapper y={0} x={40}>
            <h3>Mi Trayectoria Profesional</h3>
          </AnimatedWrapper>
          <AnimatedWrapper y={0} x={40} delay={0.1}>
            <p>
              Cada paso en mi carrera ha sido una oportunidad para aprender y
              crecer. Desde proyectos iniciales que me enseñaron las bases del
              desarrollo web, hasta colaboraciones más desafiantes en las que
              perfeccioné mis habilidades, cada experiencia ha moldeado mi
              enfoque profesional
            </p>
          </AnimatedWrapper>
        </TextWrapper>

        <Timeline />
        <TimelineCardContainer>
          {timelineData.map((tech, i) => (
            <AnimatedWrapper
              y={0}
              x={40}
              delay={i * 0.1}
              style={{ width: "100%" }}
            >
              <TimelineCard key={tech.id} {...tech} />
            </AnimatedWrapper>
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
