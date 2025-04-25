import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import TextWrapper from "../../components/Layout/TextWrapper/TextWrapper";
import ShowcaseCard from "../../components/Cards/ShowcaseCard/ShowcaseCard";
import { WorksContainer } from "./Works.styles";
import AnimatedWrapper from "../../components/Layout/AnimatedWrapper/AnimatedWrapper";
import worksData from "@/data/worksData";

function Works() {
  return (
    <PageWrapper>
      <TextWrapper>
        <AnimatedWrapper y={0} x={40}>
          <h2>Featured Work</h2>
        </AnimatedWrapper>
        <AnimatedWrapper y={0} x={40} delay={0.1}>
          <p>
            A selection of my work showcasing my skills in frontend development
            and my focus on building clean, efficient, and user-centered digital
            experiences.
          </p>
        </AnimatedWrapper>
      </TextWrapper>
      <WorksContainer>
        {worksData
          .slice()
          .reverse()
          .map((item, i) => (
            <AnimatedWrapper key={i} style={{ width: "100%" }}>
              <ShowcaseCard {...item} type="works" />
            </AnimatedWrapper>
          ))}
      </WorksContainer>
    </PageWrapper>
  );
}

export default Works;
