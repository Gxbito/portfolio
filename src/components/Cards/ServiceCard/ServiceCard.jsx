import {
  ServiceCardStyled,
  TextContainer,
  ListContainer,
  ButtonsContainer,
} from "./ServiceCard.styles";
import { FiArrowRightCircle } from "react-icons/fi";
import PrimaryButton from "../../UI/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../UI/Buttons/SecondaryButton/SecondaryButton";

function ServiceCard({ title, description, image, features }) {
  return (
    <ServiceCardStyled>
      <img src={image} alt={title} />
      <TextContainer>
        <h4>{title}</h4>
        <p>{description}</p>
      </TextContainer>
      <ListContainer>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ListContainer>
      <ButtonsContainer>
        <PrimaryButton to="/contact">Get started now</PrimaryButton>
        <SecondaryButton>
          E-mail
          <FiArrowRightCircle />
        </SecondaryButton>
      </ButtonsContainer>
    </ServiceCardStyled>
  );
}

export default ServiceCard;
