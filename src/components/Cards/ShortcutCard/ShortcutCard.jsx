import { ShortcutCardStyled, TextContainer } from "./ShortcutCard.styles";
import CardButton from "../../UI/Buttons/CardButton/CardButton";
import { FiArrowRightCircle } from "react-icons/fi";
import ServicesIcon from "../../../../public/icons/web/File.svg";
import AboutIcon from "../../../../public/icons/web/Crown.svg";

const iconsMap = {
  services: ServicesIcon,
  about: AboutIcon,
};

function ShortcutCard({ cardType }) {
  const SelectedIcon = iconsMap[cardType];

  return (
    <ShortcutCardStyled>
      <div>
        <img src={SelectedIcon} alt="bg-icon" />
        <TextContainer>
          <h4>{cardType === "services" ? "Services" : "About me"}</h4>
          <p>
            {cardType === "services"
              ? "Explore the services I provide as a frontend developer"
              : "A glimpse into who I am and what drives my work"}
          </p>
        </TextContainer>
      </div>

      <CardButton to={cardType === "services" ? "/services" : "/about"}>
        View more
        <FiArrowRightCircle />
      </CardButton>
    </ShortcutCardStyled>
  );
}

export default ShortcutCard;
