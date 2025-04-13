import PageWrapper from "../../components/Layout/PageWrapper/PageWrapper";
import TextWrapper from "../../components/Layout/TextWrapper/TextWrapper";
import TechGroupCard from "../../components/Cards/TechGroupCard/TechGroupCard";
import { StackContainer } from "./Stack.styles";
import stackData from "../../data/stackData.json";
import AnimatedWrapper from "@/components/Layout/AnimatedWrapper/AnimatedWrapper";

function Stack() {
  const filteredCategories = [
    ...new Set(stackData.map((tech) => tech.category)),
  ];

  return (
    <PageWrapper>
      <TextWrapper>
        <AnimatedWrapper y={0} x={40}>
          <h2>Tecnologías que domino</h2>
        </AnimatedWrapper>
        <AnimatedWrapper y={0} x={40} delay={0.1}>
          <p>
            Como desarrollador frontend especializado en interfaces modernas,
            utilizo estas tecnologías para construir experiencias digitales
            eficientes y atractivas.
          </p>
        </AnimatedWrapper>
      </TextWrapper>
      <StackContainer>
        {filteredCategories.map((cat) => (
          <AnimatedWrapper style={{ width: "100%" }}>
            <TechGroupCard key={cat} cat={cat} />
          </AnimatedWrapper>
        ))}
      </StackContainer>
    </PageWrapper>
  );
}

export default Stack;
