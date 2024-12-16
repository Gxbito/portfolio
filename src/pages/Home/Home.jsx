import {
  TextContainer,
  ButtonsContainer,
  ShorcutCardsContainer,
} from "./Home.styles";
import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper"
import PreviewSection from "../../components/Layout/PreviewSection/PreviewSection"
import ShortcutCard from "../../components/Cards/ShortcutCard/ShortcutCard"
import StackCard from "../../components/Cards/StackCard/StackCard"
import PrimaryButton from "../../components/UI/Buttons/PrimaryButton/PrimaryButton"
import SecondaryButton from "../../components/UI/Buttons/SecondaryButton/SecondaryButton"
import { FiArrowRightCircle } from "react-icons/fi";

function Home() {
  return (
    <PageWrapper>
      <TextContainer>
        <h1>Hello Im Gabriel Martinez, Frontend Developer</h1>
        <p>
          Con 2 años de experiencia en React, me apasiona crear interfaces
          optimizadas y atractivas.
        </p>

        <ButtonsContainer>
          <PrimaryButton>View all projects</PrimaryButton>
          <SecondaryButton>
            Contact me
            <FiArrowRightCircle />
          </SecondaryButton>
        </ButtonsContainer>
      </TextContainer>
      <PreviewSection sectionType="works" />
      <PreviewSection sectionType="projects" />
      <ShorcutCardsContainer>
        <ShortcutCard cardType="services" />
        <ShortcutCard cardType="about" />
      </ShorcutCardsContainer>
      <StackCard />
    </PageWrapper>
  );
}

export default Home;
