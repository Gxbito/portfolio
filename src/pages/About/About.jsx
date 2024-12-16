import {
  AboutHeroContainer,
  TimelineContainer,
  TimelineStrokeContainer,
  TimelineVerticalStroke,
  TimelinePoint,
  TimelineCardContainer,
} from "./About.styles";

import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper"
import PreviewSection from "../../components/Layout/PreviewSection/PreviewSection"
import TextWrapper from "../../components/Layout/TextWrapper/TextWrapper"
import ShortcutCard from "../../components/Cards/ShortcutCard/ShortcutCard"
import StackCard from "../../components/Cards/StackCard/StackCard"
import PrimaryButton from "../../components/UI/Buttons/PrimaryButton/PrimaryButton"
import SecondaryButton from "../../components/UI/Buttons/SecondaryButton/SecondaryButton"

function About() {
  return (
    <PageWrapper>
      <AboutHeroContainer>
        <img src="./assets/images/Argentina-flag.jpg" alt="#" />
        <TextWrapper>
          <h1>Meeting the creator</h1>
          <p>
            Soy Gabriel Martínez, desarrollador frontend con más de 2 años de
            experiencia creando interfaces intuitivas, atractivas y optimizadas.
            Mi pasión por el diseño y la tecnología me ha llevado a dominar
            herramientas modernas como React, Material UI y Figma. Me
            especializo en transformar ideas en productos digitales claros y
            accesibles, siempre con un enfoque en la experiencia del usuario. Mi
            objetivo es crear aplicaciones que no solo sean eficientes, sino que
            también generen un impacto positivo en quienes las utilizan
          </p>
        </TextWrapper>
      </AboutHeroContainer>
    </PageWrapper>
  );
}

export default About;
