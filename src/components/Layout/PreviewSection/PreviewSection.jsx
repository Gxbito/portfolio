import {
  PreviewSectionWrapper,
  PreviewSectionData,
  DataContainer,
  DataTextContainer,
  PreviewSectionContainer,
} from "./PreviewSection.styles";

import ProjectCard from "../../Cards/ProjectCard/ProjectCard";
import SecondaryButton from "../../UI/Buttons/SecondaryButton/SecondaryButton";

function PreviewSection() {
  return (
    <PreviewSectionWrapper>
      <PreviewSectionData>
        <DataContainer>
          <img src="#" alt="#" />
          <DataTextContainer>
            <h5>Proyectos</h5>
            <h6>Aquí encontrarás algunos de mis proyectos destacados.</h6>
          </DataTextContainer>
        </DataContainer>
        <SecondaryButton>lol</SecondaryButton>
      </PreviewSectionData>

      <PreviewSectionContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </PreviewSectionContainer>
    </PreviewSectionWrapper>
  );
}

export default PreviewSection;
