import { ShortcutCardStyled, TextContainer } from "./ShortcutCard.styles";
import CardButton from "../../UI/Buttons/CardButton/CardButton";
import { FiArrowRightCircle } from "react-icons/fi";
import ServicesIcon from "../../../assets/icons/web/File.svg";
import AboutIcon from "../../../assets/icons/web/Crown.svg";

const iconsMap = {
  services: ServicesIcon,
  about: AboutIcon,
};

function ShortcutCard({ cardType }) {
  const SelectedIcon = iconsMap[cardType];

  return (
    <ShortcutCardStyled>
      <img src={SelectedIcon} alt="bg-icon" />
      <TextContainer>
        <h4>{cardType === "services" ? "Services" : "About me"}</h4>
        <p>
          {cardType === "services"
            ? "Aquí encontrarás algunos de mis trabajos destacados."
            : "Aquí encontrarás algunos de mis trabajos destacados."}
        </p>
      </TextContainer>
      <CardButton to={cardType === "services" ? "/services" : "/about"}>
        View more
        <FiArrowRightCircle />
      </CardButton>
    </ShortcutCardStyled>
  );
}

export default ShortcutCard;
