import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import TextWrapper from "../../components/Layout/TextWrapper/TextWrapper";
import TechGroupCard from "../../components/Cards/TechGroupCard/TechGroupCard";
import { StackContainer } from "./Stack.styles";
import stackData from "../../data/stackData.json";

function Stack() {
  
  const filteredCategories = [
    ...new Set(stackData.map((tech) => tech.category)),
  ];

  return (
    <PageWrapper>
      <TextWrapper>
        <h2>Tecnologías que domino</h2>
        <p>
          Como desarrollador frontend especializado en interfaces modernas,
          utilizo estas tecnologías para construir experiencias digitales
          eficientes y atractivas.
        </p>
      </TextWrapper>
      <StackContainer>
        {filteredCategories.map((cat) => (
          <TechGroupCard key={cat} cat={cat}/>
        ))}
      </StackContainer>
    </PageWrapper>
  );
}

export default Stack;
