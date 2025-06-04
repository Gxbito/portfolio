import { Link, useParams } from "react-router-dom";
import PageWrapper from "@/components/Layout/PageWrapper/PageWrapper";
import {
  DocumentationContainer,
  DocumentationDataContainer,
  DocumentationTitle,
  DocumentationContentsContainer,
  GalleryContainer,
  MainImageContainer,
  Separator,
  TextContainer,
  TitleContainer,
  LastImageContainer,
  DocumentationTagsContainer,
} from "./Documentation.styles";
import AnimatedWrapper from "@/components/Layout/AnimatedWrapper/AnimatedWrapper";
import HiddenWrapper from "@/components/Layout/HiddenWrapper/HiddenWrapper";
import worksData from "@/data/worksData";
import projectsData from "@/data/projectsData";
import { useActiveSection } from "@/hooks/useActiveSection";
import Tag from "@/components/UI/Tag/Tag";
import { FiExternalLink } from "react-icons/fi";
import Header from "@/components/Header/Header";

const documentationItems = [
  { title: "Overview" },
  { title: "Tecnologías" },
  { title: "Desafíos" },
  { title: "Proceso" },
  { title: "Lecciones aparendidas" },
  { title: "Evolución futura" },
  { title: "Caracteristicas clave" },
  { title: "Integraciones" },
  { title: "Documentación" },
];

function Documentation() {
  const { id } = useParams();
  const project =
    worksData.find((item) => item.id === id) ||
    projectsData.find((item) => item.id === id);
  const activeSection = useActiveSection();

  const handleSectionClick = (index) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <PageWrapper page="documentation">
      <Header name={project.name} demo={project.demo} />
      <DocumentationContainer>
        <DocumentationDataContainer>
          <TitleContainer>
            <HiddenWrapper hideOn="mobile">
              <AnimatedWrapper>
                <h5>Frontend Developer – {project.year}</h5>
              </AnimatedWrapper>
            </HiddenWrapper>

            <AnimatedWrapper delay={0.1}>
              <h2>{project.title}</h2>
            </AnimatedWrapper>

            <AnimatedWrapper delay={0.2}>
              <p>{project.description}</p>
            </AnimatedWrapper>
          </TitleContainer>

          <AnimatedWrapper>
            <MainImageContainer
              shadow={project.colors.shadow}
              gradientStart={project.colors.gradientStart}
              gradientEnd={project.colors.gradientEnd}
            >
              <Link
                to={project.demo}>
                <img src={project.images.desktopHome} alt="project" />
                <img src={project.images.mobileHome} alt="project" />
                <h4>
                  View project <FiExternalLink />
                </h4>
              </Link>
            </MainImageContainer>
          </AnimatedWrapper>

          {project.sections.slice(0, 2).map((item, i) => {
            const globalIndex = i + 0;
            return (
              <AnimatedWrapper
                key={i}
                style={{ width: "100%", maxWidth: "741px" }}
              >
                <TextContainer>
                  <h4 id={`section-${globalIndex}`}>{item.title}</h4>

                  <div>
                    {item.content.map((block, index) => {
                      if (block.type === "paragraph") {
                        return (
                          <p
                            key={index}
                            dangerouslySetInnerHTML={{ __html: block.text }}
                          />
                        );
                      }

                      if (block.type === "list") {
                        return (
                          <ul key={index}>
                            {block.items.map((li, liIndex) => (
                              <li
                                key={liIndex}
                                dangerouslySetInnerHTML={{ __html: li }}
                              />
                            ))}
                          </ul>
                        );
                      }

                      return null;
                    })}
                  </div>
                </TextContainer>
              </AnimatedWrapper>
            );
          })}

          <GalleryContainer
            shadow={project.colors.shadow}
            gradientStart={project.colors.gradientStart}
            gradientEnd={project.colors.gradientEnd}
          >
            <AnimatedWrapper style={{ gridColumn: "span 2" }}>
              <div>
                <img src={project.images.documentation[0]} alt="project" />
              </div>
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.1}>
              <div>
                <img src={project.images.documentation[1]} alt="project" />
              </div>
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.2}>
              <div>
                <img src={project.images.documentation[2]} alt="project" />
              </div>
            </AnimatedWrapper>
          </GalleryContainer>

          {project.sections.slice(2, 4).map((item, i) => {
            const globalIndex = i + 2;
            return (
              <AnimatedWrapper
                key={i}
                style={{ width: "100%", maxWidth: "741px" }}
              >
                <TextContainer>
                  <h4 id={`section-${globalIndex}`}>{item.title}</h4>
                  <div>
                    {item.content.map((block, index) => {
                      if (block.type === "paragraph") {
                        return (
                          <p
                            key={index}
                            dangerouslySetInnerHTML={{ __html: block.text }}
                          />
                        );
                      }
                      if (block.type === "list") {
                        return (
                          <ul key={index}>
                            {block.items.map((item, idx) => (
                              <li
                                key={idx}
                                dangerouslySetInnerHTML={{ __html: item }}
                              />
                            ))}
                          </ul>
                        );
                      }
                      return null;
                    })}{" "}
                  </div>
                </TextContainer>
              </AnimatedWrapper>
            );
          })}

          <Separator />
          {project.sections.slice(4, 6).map((item, i) => {
            const globalIndex = i + 4;
            return (
              <AnimatedWrapper
                key={i}
                style={{ width: "100%", maxWidth: "741px" }}
              >
                <TextContainer>
                  <h4 id={`section-${globalIndex}`}>{item.title}</h4>

                  <div>
                    {item.content.map((block, index) => {
                      if (block.type === "paragraph") {
                        return (
                          <p
                            key={index}
                            dangerouslySetInnerHTML={{ __html: block.text }}
                          />
                        );
                      }
                      if (block.type === "list") {
                        return (
                          <ul key={index}>
                            {block.items.map((item, idx) => (
                              <li
                                key={idx}
                                dangerouslySetInnerHTML={{ __html: item }}
                              />
                            ))}
                          </ul>
                        );
                      }
                      return null;
                    })}
                  </div>
                </TextContainer>
              </AnimatedWrapper>
            );
          })}
          <AnimatedWrapper style={{ width: "100%" }}>
            <LastImageContainer
              shadow={project.colors.shadow}
              gradientStart={project.colors.gradientStart}
              gradientEnd={project.colors.gradientEnd}
            >
              <div>
                <img src={project.images.documentation[3]} alt="project" />
              </div>
            </LastImageContainer>
          </AnimatedWrapper>

          {project.sections.slice(6, 10).map((item, i) => {
            const globalIndex = i + 6;

            return (
              <AnimatedWrapper
                key={i}
                style={{ width: "100%", maxWidth: "741px" }}
              >
                <TextContainer>
                  <h4 id={`section-${globalIndex}`}>{item.title}</h4>
                  <div>
                    {item.content.map((block, index) => {
                      if (block.type === "paragraph") {
                        return (
                          <p
                            key={index}
                            dangerouslySetInnerHTML={{ __html: block.text }}
                          />
                        );
                      }
                      if (block.type === "list") {
                        return (
                          <ul key={index}>
                            {block.items.map((item, idx) => (
                              <li
                                key={idx}
                                dangerouslySetInnerHTML={{ __html: item }}
                              />
                            ))}
                          </ul>
                        );
                      }
                      return null;
                    })}
                  </div>
                </TextContainer>
              </AnimatedWrapper>
            );
          })}
        </DocumentationDataContainer>
        <div>
          <DocumentationContentsContainer>
            <h6>CONTENTS</h6>
            {documentationItems.map((item, i) => (
              <AnimatedWrapper key={i} delay={i * 0.1} x={40} y={0}>
                <DocumentationTitle
                  isActive={activeSection === i}
                  onClick={() => handleSectionClick(i)}
                >
                  {item.title}
                </DocumentationTitle>
              </AnimatedWrapper>
            ))}
          </DocumentationContentsContainer>
          <DocumentationTagsContainer>
            <h6>STACK</h6>
            {project.stack.map((tag, i) => (
              <Tag data={tag} key={i} />
            ))}
          </DocumentationTagsContainer>
        </div>
      </DocumentationContainer>
    </PageWrapper>
  );
}

export default Documentation;
