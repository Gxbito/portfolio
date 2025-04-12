import {
  TextContainer,
  ButtonsContainer,
  ShorcutCardsContainer,
} from "./Home.styles";
import PageWrapper from "@/components/Layout/PageWrapper/PageWrapper";
import PreviewSection from "@/components/Layout/PreviewSection/PreviewSection";
import ShortcutCard from "@/components/Cards/ShortcutCard/ShortcutCard";
import StackCard from "@/components/Cards/StackCard/StackCard";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "@/components/UI/Buttons/SecondaryButton/SecondaryButton";
import { FiArrowRightCircle } from "react-icons/fi";
import AnimatedWrapper from "@/components/Layout/AnimatedWrapper/AnimatedWrapper";

function Home() {
  return (
    <PageWrapper page="home">
      <AnimatedWrapper>
        <TextContainer>
          <h1>Hello Im Gabriel Martinez, Frontend Developer</h1>
          <p>
            Con 2 años de experiencia en React, me apasiona crear interfaces
            optimizadas y atractivas.
          </p>
          <AnimatedWrapper>
            <ButtonsContainer>
              <PrimaryButton>View all projects</PrimaryButton>
              <AnimatedWrapper>
                <SecondaryButton>
                  Contact me
                  <FiArrowRightCircle />
                </SecondaryButton>
              </AnimatedWrapper>
            </ButtonsContainer>
          </AnimatedWrapper>
        </TextContainer>
      </AnimatedWrapper>

      <PreviewSection sectionType="works" />
      <PreviewSection sectionType="projects" />
      <ShorcutCardsContainer>
        <AnimatedWrapper>
          <ShortcutCard cardType="services" />
        </AnimatedWrapper>

        <AnimatedWrapper delay="0.2">
          <ShortcutCard cardType="about" />
        </AnimatedWrapper>
      </ShorcutCardsContainer>
      <StackCard />
    </PageWrapper>
  );
}

export default Home;
