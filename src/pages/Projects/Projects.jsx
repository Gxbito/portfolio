import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import TextWrapper from "../../components/Layout/TextWrapper/TextWrapper";
import ShowcaseCard from "../../components/Cards/ShowcaseCard/ShowcaseCard";
import { ProjectsContainer } from "./Projects.styles";
import AnimatedWrapper from "../../components/Layout/AnimatedWrapper/AnimatedWrapper";

function Projects() {
  return (
    <PageWrapper>
      <TextWrapper>
        <AnimatedWrapper y={0} x={40}>
          <h2>Hitos de Mi Carrera</h2>
        </AnimatedWrapper>
        <AnimatedWrapper y={0} x={40} delay={0.1}>
          <p>
            Cada proyecto representa un desafío resuelto, una oportunidad de
            aprender y una muestra de mi compromiso con el diseño y el
            desarrollo web. Aquí encontrarás los trabajos que destacan por su
            creatividad, funcionalidad y atención al detalle. ¡Descúbrelos!
          </p>
        </AnimatedWrapper>
      </TextWrapper>
      <ProjectsContainer>
        <AnimatedWrapper style={{ width: "100%" }}>
          <ShowcaseCard type="project" />
        </AnimatedWrapper>
        <AnimatedWrapper style={{ width: "100%" }}>
          <ShowcaseCard type="project" />
        </AnimatedWrapper>
        <AnimatedWrapper style={{ width: "100%" }}>
          <ShowcaseCard type="project" />
        </AnimatedWrapper>
        <AnimatedWrapper style={{ width: "100%" }}>
          <ShowcaseCard type="project" />
        </AnimatedWrapper>
      </ProjectsContainer>
    </PageWrapper>
  );
}

export default Projects;
