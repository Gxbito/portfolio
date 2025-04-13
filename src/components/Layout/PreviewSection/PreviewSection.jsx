import {
  PreviewSectionWrapper,
  PreviewSectionData,
  DataContainer,
  DataTextContainer,
  PreviewSectionCardContainer,
} from "./PreviewSection.styles";
import ProjectCard from "../../Cards/ProjectCard/ProjectCard";
import WorkCard from "../../Cards/WorkCard/WorkCard";
import CertificateCard from "../../Cards/CertificateCard/CertificateCard";
import SecondaryButton from "../../UI/Buttons/SecondaryButton/SecondaryButton";
import { FiArrowRightCircle } from "react-icons/fi";
import WorksIcon from "../../../assets/icons/web/Ruler.svg";
import ProjectsIcon from "../../../assets/icons/web/Flash.svg";
import CertificatesIcon from "../../../assets/icons/web/Badge.svg";
import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";

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
          <AnimatedWrapper>
            <WorkCard />
          </AnimatedWrapper>
          <AnimatedWrapper delay="0.1">
            <WorkCard />
          </AnimatedWrapper>
          <AnimatedWrapper delay="0.2">
            <WorkCard />
          </AnimatedWrapper>
        </>
      );
    } else if (sectionType === "projects") {
      return (
        <>
          <AnimatedWrapper>
            <ProjectCard />
          </AnimatedWrapper>
          <AnimatedWrapper delay="0.1">
            <ProjectCard />
          </AnimatedWrapper>
          <AnimatedWrapper delay="0.2">
            <ProjectCard />
          </AnimatedWrapper>
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
          <AnimatedWrapper y={0} x={20}>
            <img src={SelectedIcon} alt={sectionType} />
          </AnimatedWrapper>

          <DataTextContainer>
            <AnimatedWrapper y={0} x={20}>
              <h5>{sectionType === "works" ? "Works" : "Projects"}</h5>
            </AnimatedWrapper>
            <AnimatedWrapper y={0} x={20} delay={0.1}>
              <h6>
                {sectionType === "works"
                  ? "Aquí encontrarás algunos de mis trabajos destacados."
                  : "Aquí encontrarás algunos de mis proyectos destacados."}
              </h6>
            </AnimatedWrapper>
          </DataTextContainer>
        </DataContainer>
        <AnimatedWrapper y={0} x={-20}>
          <SecondaryButton to={sectionType === "works" ? "/works" : "/projects"}>
            {sectionType === "works" ? "View all works" : "View all projects"}
            <FiArrowRightCircle />
          </SecondaryButton>
        </AnimatedWrapper>
      </PreviewSectionData>

      <PreviewSectionCardContainer>{renderCards()}</PreviewSectionCardContainer>
    </PreviewSectionWrapper>
  );
}

export default PreviewSection;
