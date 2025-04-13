import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import TextWrapper from "../../components/Layout/TextWrapper/TextWrapper";
import ShowcaseCard from "../../components/Cards/ShowcaseCard/ShowcaseCard";
import { WorksContainer } from "./Works.styles";
import AnimatedWrapper from "../../components/Layout/AnimatedWrapper/AnimatedWrapper";

function Works() {
  return (
    <PageWrapper>
      <TextWrapper>
        <AnimatedWrapper y={0} x={40}>
          <h2>Mi Trabajo Destacado</h2>
        </AnimatedWrapper>
        <AnimatedWrapper y={0} x={40} delay={0.1}>
          <p>
            Pequeños destellos de lo que he construido: una colección de
            proyectos que reflejan mi pasión por el desarrollo frontend y la
            creación de experiencias digitales impactantes.
          </p>
        </AnimatedWrapper>
      </TextWrapper>
      <WorksContainer>
        <AnimatedWrapper style={{ width: "100%" }}>
          <ShowcaseCard type="work" />
        </AnimatedWrapper>
        <AnimatedWrapper style={{ width: "100%" }}>
          <ShowcaseCard type="work" />
        </AnimatedWrapper>
        <AnimatedWrapper style={{ width: "100%" }}>
          <ShowcaseCard type="work" />
        </AnimatedWrapper>
        <AnimatedWrapper style={{ width: "100%" }}>
          <ShowcaseCard type="work" />
        </AnimatedWrapper>
      </WorksContainer>
    </PageWrapper>
  );
}

export default Works;
