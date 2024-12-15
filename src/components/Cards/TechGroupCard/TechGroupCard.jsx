import { TechGroupCardStyled } from "./TechGroupCard.styles"
import Technology from "../../UI/Technology/Technology"

function TechGroupCard() {
  return (
    <TechGroupCardStyled>
      <h4>Tecnologia</h4>
      <Technology type="html"/>
      <Technology type="css"/>
      <Technology type="html"/>
      <Technology type="css"/>
    </TechGroupCardStyled>
  )
}

export default TechGroupCard
