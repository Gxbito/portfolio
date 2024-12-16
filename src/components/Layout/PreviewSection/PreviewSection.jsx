import {
  PreviewSectionWrapper,
  PreviewSectionData,
  DataContainer,
  DataTextContainer,
  PreviewSectionCardContainer,
} from "./PreviewSection.styles";
import ProjectCard from "../../Cards/ProjectCard/ProjectCard";
import WorkCard from "../../Cards/WorkCard/WorkCard";
import CertificateCard from "../../Cards/CertificateCard/CertificateCard"
import SecondaryButton from "../../UI/Buttons/SecondaryButton/SecondaryButton";
import { FiArrowRightCircle } from "react-icons/fi";
import WorksIcon from "../../../assets/icons/web/Ruler.svg";
import ProjectsIcon from "../../../assets/icons/web/Flash.svg";
import CertificatesIcon from "../../../assets/icons/web/Badge.svg";

const iconsMap = {
  works: WorksIcon,
  projects: ProjectsIcon,
  certificates: CertificatesIcon,
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
    } else if (sectionType === "projects") {
      return (
        <>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </>
      );
    } else {
      return (
        <>
          <CertificateCard />
          <CertificateCard />
          <CertificateCard />
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
