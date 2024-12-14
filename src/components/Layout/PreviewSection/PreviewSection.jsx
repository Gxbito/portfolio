import {
  PreviewSectionWrapper,
  PreviewSectionData,
  DataContainer,
  DataTextContainer,
  PreviewSectionCardContainer,
} from "./PreviewSection.styles";
import ProjectCard from "../../Cards/ProjectCard/ProjectCard";
import SecondaryButton from "../../UI/Buttons/SecondaryButton/SecondaryButton";
import WorksIcon from "../../../assets/icons/Ruler.svg";
import ProjectsIcon from "../../../assets/icons/Flash.svg";

const iconsMap = {
  works: WorksIcon,
  projects: ProjectsIcon,
};

function PreviewSection({ iconKey }) {
  const SelectedIcon = iconsMap[iconKey];

  return (
    <PreviewSectionWrapper>
      <PreviewSectionData>
        <DataContainer>
          <img src={SelectedIcon} alt={iconKey} />
          <DataTextContainer>
            <h5>Proyectos</h5>
            <h6>Aquí encontrarás algunos de mis proyectos destacados.</h6>
          </DataTextContainer>
        </DataContainer>
        <SecondaryButton>lol</SecondaryButton>
      </PreviewSectionData>

      <PreviewSectionCardContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </PreviewSectionCardContainer>
    </PreviewSectionWrapper>
  );
}

export default PreviewSection;
