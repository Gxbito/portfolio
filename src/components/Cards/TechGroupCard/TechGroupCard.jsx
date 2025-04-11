import { TechGroupCardStyled } from "./TechGroupCard.styles";
import Technology from "../../UI/Technology/Technology";
import stackData from "../../../data/stackData.json";

function TechGroupCard({ cat }) {
  
  return (
    <>
      <TechGroupCardStyled>
        <h4>{cat}</h4>
        {stackData
          .filter((tech) => tech.category === cat)
          .map((tech) => (
            <Technology key={tech.id} {...tech} />
          ))}
      </TechGroupCardStyled>
    </>
  );
}

export default TechGroupCard;
