import { TechnologyStyled, TechnologyDataContainer } from "./Technology.styles";

function Technology({ icon, title, description}) {
  return (
    <TechnologyStyled>
      <img src={icon} alt={title} />
      <TechnologyDataContainer>
        <h5>{title}</h5>
        <h6>{description}</h6>
      </TechnologyDataContainer>
    </TechnologyStyled>
  );
}

export default Technology;
