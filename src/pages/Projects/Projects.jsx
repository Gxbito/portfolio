import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import TextWrapper from "../../components/Layout/TextWrapper/TextWrapper";
import ShowcaseCard from "../../components/Cards/ShowcaseCard/ShowcaseCard";
import { ProjectsContainer } from "./Projects.styles";

function Projects() {
  return (
    <PageWrapper>
      <TextWrapper>
        <h2>Hitos de Mi Carrera</h2>
        <p>
          Cada proyecto representa un desafío resuelto, una oportunidad de
          aprender y una muestra de mi compromiso con el diseño y el desarrollo
          web. Aquí encontrarás los trabajos que destacan por su creatividad,
          funcionalidad y atención al detalle. ¡Descúbrelos!
        </p>
      </TextWrapper>
      <ProjectsContainer>
        <ShowcaseCard type="project" />
        <ShowcaseCard type="project" />
        <ShowcaseCard type="project" />
        <ShowcaseCard type="project" />
      </ProjectsContainer>
    </PageWrapper>
  );
}

export default Projects;
