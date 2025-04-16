import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageWrapper from "@/components/Layout/PageWrapper/PageWrapper";
import {
  DocumentationContainer,
  DocumentationDataContainer,
  DocumentationTitltesContainer,
  GalleryContainer,
  Separator,
  TextContainer,
  TitleContainer,
} from "./Documentation.styles";
import AnimatedWrapper from "@/components/Layout/AnimatedWrapper/AnimatedWrapper";
import HiddenWrapper from "@/components/Layout/HiddenWrapper/HiddenWrapper";
import worksData from "@/data/worksData";
import projectsData from "@/data/projectsData";
import { useActiveSection } from "@/hooks/useActiveSection";

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
    const el = document.getElementById(`section-${index}`);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <PageWrapper page="documentation">
      <DocumentationContainer>
        <DocumentationDataContainer>
          <TitleContainer>
            <HiddenWrapper hideOn="mobile">
              <AnimatedWrapper>
                <h5>Frontend Developer – November {project.year}</h5>
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
            <img src={project.gallery[0]} alt="project" />
          </AnimatedWrapper>

          {project.sections.slice(0, 2).map((item, i) => (
            <AnimatedWrapper key={i}>
              <TextContainer>
                <h4 id={`section-${i}`}>{item.title}</h4>
                {item.content.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </TextContainer>
            </AnimatedWrapper>
          ))}

          <GalleryContainer>
            <AnimatedWrapper style={{ gridColumn: "span 2" }}>
              <img src={project.gallery[1]} alt="project" />
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.1}>
              <img src={project.gallery[2]} alt="project" />
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.2}>
              <img src={project.gallery[3]} alt="project" />
            </AnimatedWrapper>
          </GalleryContainer>

          {project.sections.slice(2, 4).map((item, i) => {
            const globalIndex = i + 2;
            return (
              <AnimatedWrapper key={globalIndex}>
                <TextContainer>
                  <h4 id={`section-${globalIndex}`}>{item.title}</h4>
                  {item.content.split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </TextContainer>
              </AnimatedWrapper>
            );
          })}

          <Separator />
          {project.sections.slice(4, 6).map((item, i) => {
            const globalIndex = i + 4;
            return (
              <AnimatedWrapper key={globalIndex}>
                <TextContainer>
                  <h4 id={`section-${globalIndex}`}>{item.title}</h4>
                  {item.content.split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </TextContainer>
              </AnimatedWrapper>
            );
          })}

          <AnimatedWrapper style={{ width: "100%" }}>
            <img src={project.gallery[4]} alt="project" />
          </AnimatedWrapper>

          {project.sections.slice(6, 9).map((item, i) => {
            const globalIndex = i + 6;

            return (
              <AnimatedWrapper key={i}>
                <TextContainer>
                  <h4 id={`section-${globalIndex}`}>{item.title}</h4>
                  {item.content.split("\n").map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </TextContainer>
              </AnimatedWrapper>
            );
          })}
        </DocumentationDataContainer>
        <div>
          <DocumentationTitltesContainer>
            {documentationItems.map((item, i) => (
              <AnimatedWrapper key={i}>
                <li
                  onClick={() => handleSectionClick(i)}
                  style={{
                    cursor: "pointer",
                    color: activeSection === i ? "white" : "gray",
                  }}
                >
                  {item.title}
                </li>
              </AnimatedWrapper>
            ))}
          </DocumentationTitltesContainer>
        </div>
      </DocumentationContainer>
    </PageWrapper>
  );
}

export default Documentation;
