import {
  ServiceCardStyled,
  TextContainer,
  ListContainer,
  ButtonsContainer,
} from "./ServiceCard.styles";
import { FiArrowRightCircle } from "react-icons/fi";
import { PrimaryButton, SecondaryButton } from "../../index";

function ServiceCard() {
  return (
    <ServiceCardStyled>
      <img src="#" alt="#" />
      <TextContainer>
        <h4>Frontend Developer</h4>
        <p>
          Desarrollo aplicaciones web rápidas y responsivas con React y Material
          UI
        </p>
      </TextContainer>
      <ListContainer>
        <li>Diseño Responsivo</li>
        <li>Optimización de Rendimiento</li>
        <li>Experiencia en React</li>
        <li>Integración con APIs</li>
      </ListContainer>
      <ButtonsContainer>
        <PrimaryButton>Get started now</PrimaryButton>
        <SecondaryButton>
          E-mail
          <FiArrowRightCircle />
        </SecondaryButton>
      </ButtonsContainer>
    </ServiceCardStyled>
  );
}

export default ServiceCard;
