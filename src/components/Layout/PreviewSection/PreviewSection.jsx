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
import WorksIcon from "@/assets/icons/web/Ruler.svg";
import ProjectsIcon from "@/assets/icons/web/Flash.svg";
import CertificatesIcon from "@/assets/icons/web/Badge.svg";
import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";
import projectsData from "@/data/projectsData.json";
import worksData from "@/data/worksData.json";

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
          {worksData.slice(-3).reverse().map((item, i) => (
            <AnimatedWrapper key={i} delay={i * 0.1}>
              <WorkCard {...item} />
            </AnimatedWrapper>
          ))}
        </>
      );
    } else if (sectionType === "projects") {
      return (
        <>
          {projectsData.slice(0, 3).map((item, i) => (
            <AnimatedWrapper key={i} delay={i * 0.1}>
              <ProjectCard {...item} />
            </AnimatedWrapper>
          ))}
        </>
      );
    } else {
      return (
        <>
          <AnimatedWrapper>
            <CertificateCard />
          </AnimatedWrapper>
          <AnimatedWrapper delay="0.1">
            <CertificateCard />
          </AnimatedWrapper>
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
              <h5>{sectionType === "works" ? "Works" : sectionType === "projects" ? "Projects" : "Certificates"}</h5>
            </AnimatedWrapper>
            <AnimatedWrapper y={0} x={20} delay={0.1}>
              <p>
                {sectionType === "works"
                  ? "Take a look at some recent projects I’ve built for clients"
                  : sectionType === "projects"
                  ? "A selection of my most notable projects"
                  : "Take a look at my certifications"}
              </p>
            </AnimatedWrapper>
          </DataTextContainer>
        </DataContainer>
        <AnimatedWrapper y={0} x={-20}>
          <SecondaryButton
            to={sectionType === "works" ? "/works" : sectionType === "projects" ? "/projects" : "/certificates"}
          >
            View all
            <span>
              <FiArrowRightCircle />
            </span>
          </SecondaryButton>
        </AnimatedWrapper>
      </PreviewSectionData>

      <PreviewSectionCardContainer sectionType={sectionType}>
        {renderCards()}
      </PreviewSectionCardContainer>
    </PreviewSectionWrapper>
  );
}

export default PreviewSection;
