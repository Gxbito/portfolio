import { TextContainer, ButtonsContainer } from "./Home.styles";
import PageWrapper from "../../components/Layout/PageLayout/PageWrapper";
import BackgroundHome from "../../assets/backgrounds/home-background-pattern.svg";
import PrimaryButton from "../../components/UI/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../components/UI/Buttons/SecondaryButton/SecondaryButton";

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
          <SecondaryButton>Contact me</SecondaryButton>
        </ButtonsContainer>
      </TextContainer>
    </PageWrapper>
  );
}

export default Home;
