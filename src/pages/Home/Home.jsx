import {
  TextContainer,
  ButtonsContainer,
  ShorcutCardsContainer,
} from "./Home.styles";
import {
  PageWrapper,
  PrimaryButton,
  SecondaryButton,
  PreviewSection,
  ShortcutCard,
  StackCard,
  TechGroupCard
} from "../../components/index";
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
      <TechGroupCard/>
    </PageWrapper>
  );
}

export default Home;
