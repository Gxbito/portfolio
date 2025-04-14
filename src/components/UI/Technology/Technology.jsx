import { TechnologyStyled, TechnologyDataContainer } from "./Technology.styles";

function Technology({ icon, title, description}) {
  return (
    <TechnologyStyled>
      <img src={icon} alt={title} />
      <TechnologyDataContainer>
        <h5>{title}</h5>
        <p>{description}</p>
      </TechnologyDataContainer>
    </TechnologyStyled>
  );
}

export default Technology;
