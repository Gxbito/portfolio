import { TechGroupCardStyled } from "./TechGroupCard.styles";
import Technology from "../../UI/Technology/Technology";
import stackData from "../../../data/stackData.json";

function TechGroupCard({ cat }) {
  return (
    <>
      <TechGroupCardStyled>
        <h2>{cat}</h2>
        <div>
          {stackData
            .filter((tech) => tech.category === cat)
            .map((tech) => (
              <Technology key={tech.id} {...tech} />
            ))}
        </div>
      </TechGroupCardStyled>
    </>
  );
}

export default TechGroupCard;
