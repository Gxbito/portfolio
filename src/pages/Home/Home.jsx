import { TextContainer, ButtonsContainer } from "./Home.styles";
import { PageWrapper, PrimaryButton, SecondaryButton, PreviewSection } from "../../components/index";

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
      <PreviewSection iconKey="works"/>
    </PageWrapper>
  );
}

export default Home;
