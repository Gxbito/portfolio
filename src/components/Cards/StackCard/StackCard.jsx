import {
  StackCardStyled,
  StackTextContainer,
  StackContainer,
} from "./StackCard.styles";
import CardButton from "../../UI/Buttons/CardButton/CardButton";
import Technology from "../../UI/Technology/Technology";
import stackData from "../../../data/stackData.json";

function StackCard() {
  const selectedTechnologies = stackData.filter((tech) =>
    ["Material UI", "JavaScript", "React", "WordPress"].includes(tech.title)
  );

  return (
    <StackCardStyled>
      <StackTextContainer>
        <h4>Sample text</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
          nesciunt?
        </p>
      </StackTextContainer>

      <StackContainer>
        {selectedTechnologies.map((tech) => (
          <Technology key={tech.id} {...tech} />
        ))}

        <CardButton>View all tecnologies</CardButton>
      </StackContainer>
    </StackCardStyled>
  );
}

export default StackCard;
