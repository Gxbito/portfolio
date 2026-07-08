import { TechnologyStyled, TechnologyDataContainer } from "./Technology.styles";

function Technology({ icon, title, description}) {
  return (
    <TechnologyStyled>
      <img
        src={icon}
        alt=""
        width="52"
        height="52"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
      <TechnologyDataContainer>
        <h3>{title}</h3>
        <p>{description}</p>
      </TechnologyDataContainer>
    </TechnologyStyled>
  );
}

export default Technology;
