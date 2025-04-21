import {
  StackCardStyled,
  StackTextContainer,
  StackContainer,
} from "./StackCard.styles";
import CardButton from "../../UI/Buttons/CardButton/CardButton";
import Technology from "../../UI/Technology/Technology";
import stackData from "../../../data/stackData.json";
import AnimatedWrapper from "../../Layout/AnimatedWrapper/AnimatedWrapper";

function StackCard() {
  const selectedTechnologies = stackData.filter((tech) =>
    [
      "Material UI",
      "JavaScript",
      "React",
      "WordPress",
      "Figma",
      "Vite",
    ].includes(tech.title)
  );

  return (
    <AnimatedWrapper style={{ width: "100%" }}>
      <StackCardStyled>
        <StackTextContainer>
          <h4>Tech Stack</h4>
          <p>
            A selection of key tools and technologies I regularly use. Each one
            plays a part in how I build fast, responsive, and modern web
            experiences
          </p>
        </StackTextContainer>

        <StackContainer>
          {selectedTechnologies.map((tech) => (
            <Technology key={tech.id} {...tech} />
          ))}

          <CardButton to="/stack">View all tecnologies</CardButton>
        </StackContainer>
      </StackCardStyled>
    </AnimatedWrapper>
  );
}

export default StackCard;
