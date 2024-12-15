import {
  PreviewSectionWrapper,
  PreviewSectionData,
  DataContainer,
  DataTextContainer,
  PreviewSectionCardContainer,
} from "./PreviewSection.styles";
import { ProjectCard, WorkCard, SecondaryButton } from "../../index";
import { FiArrowRightCircle } from "react-icons/fi";
import WorksIcon from "../../../assets/icons/web/Ruler.svg";
import ProjectsIcon from "../../../assets/icons/web/Flash.svg";

const iconsMap = {
  works: WorksIcon,
  projects: ProjectsIcon,
};

function PreviewSection({ sectionType }) {
  const renderCards = () => {
    if (sectionType === "works") {
      return (
        <>
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </>
      );
    } else {
      return (
        <>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </>
      );
    }
  };

  const SelectedIcon = iconsMap[sectionType];

  return (
    <PreviewSectionWrapper>
      <PreviewSectionData>
        <DataContainer>
          <img src={SelectedIcon} alt={sectionType} />
          <DataTextContainer>
            <h5>{sectionType === "works" ? "Works" : "Projects"}</h5>
            <h6>
              {sectionType === "works"
                ? "Aquí encontrarás algunos de mis trabajos destacados."
                : "Aquí encontrarás algunos de mis proyectos destacados."}
            </h6>
          </DataTextContainer>
        </DataContainer>
        <SecondaryButton>
          {sectionType === "works" ? "View all works" : "View all projects"}
          <FiArrowRightCircle />
        </SecondaryButton>
      </PreviewSectionData>

      <PreviewSectionCardContainer>{renderCards()}</PreviewSectionCardContainer>
    </PreviewSectionWrapper>
  );
}

export default PreviewSection;
