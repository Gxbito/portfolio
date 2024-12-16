import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import TextWrapper from "../../components/Layout/TextWrapper/TextWrapper";
import ShowcaseCard from "../../components/Cards/ShowcaseCard/ShowcaseCard";
import { WorksContainer } from "./Works.styles";

function Works() {
  return (
    <PageWrapper>
      <TextWrapper>
        <h2>Mi Trabajo Destacado</h2>
        <p>
          Pequeños destellos de lo que he construido: una colección de proyectos
          que reflejan mi pasión por el desarrollo frontend y la creación de
          experiencias digitales impactantes.
        </p>
      </TextWrapper>
      <WorksContainer>
        <ShowcaseCard type="work"/>
        <ShowcaseCard type="work"/>
        <ShowcaseCard type="work"/>
        <ShowcaseCard type="work"/>
      </WorksContainer>
    </PageWrapper>
  );
}

export default Works;
