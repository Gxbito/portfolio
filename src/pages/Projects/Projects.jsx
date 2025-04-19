import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import TextWrapper from "../../components/Layout/TextWrapper/TextWrapper";
import ShowcaseCard from "../../components/Cards/ShowcaseCard/ShowcaseCard";
import { ProjectsContainer } from "./Projects.styles";
import AnimatedWrapper from "../../components/Layout/AnimatedWrapper/AnimatedWrapper";
import projectsData from "@/data/projectsData";

function Projects() {
  return (
    <PageWrapper>
      <TextWrapper>
        <AnimatedWrapper y={0} x={40}>
          <h2>Career Highlights</h2>
        </AnimatedWrapper>
        <AnimatedWrapper y={0} x={40} delay={0.1}>
          <p>
            Each project reflects a solved challenge, a learning opportunity,
            and my commitment to quality in design and development. These are
            the works that stand out for their creativity, functionality, and
            attention to detail.
          </p>
        </AnimatedWrapper>
      </TextWrapper>
      <ProjectsContainer>
        {projectsData.map((item, i) => (
          <AnimatedWrapper key={i} style={{ width: "100%" }}>
            <ShowcaseCard {...item} type="project" />
          </AnimatedWrapper>
        ))}
      </ProjectsContainer>
    </PageWrapper>
  );
}

export default Projects;
