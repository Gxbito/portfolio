import { useState } from "react";
import {
  ServiceCardStyled,
  TextContainer,
  ListContainer,
  ButtonsContainer,
} from "./ServiceCard.styles";
import PrimaryButton from "../../UI/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../UI/Buttons/SecondaryButton/SecondaryButton";
import { FaRegCopy } from "react-icons/fa6";

function ServiceCard({ title, description, image, features }) {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    const email = "gabmz01@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Error al copiar el correo: ", err);
      });
  };

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
        <SecondaryButton onClick={copyEmailToClipboard}>
          {copied ? "Copied" : "E-mail"}
          <FaRegCopy />
        </SecondaryButton>
      </ButtonsContainer>
    </ServiceCardStyled>
  );
}

export default ServiceCard;
