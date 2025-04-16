import {
  ShowcaseCardStyled,
  ShowcaseDataContainer,
  DataTextContainer,
} from "./ShowcaseCard.styles";
import { FiArrowRightCircle } from "react-icons/fi";
import SecondaryButton from "../../UI/Buttons/SecondaryButton/SecondaryButton";

function ShowcaseCard({ id, title, description, image, type }) {
  return (
    <ShowcaseCardStyled>
      <ShowcaseDataContainer>
        <DataTextContainer>
          <h3>{title}</h3>
          <p>{description}</p>
        </DataTextContainer>
        <SecondaryButton to={`/documentation/${id}`}>
          {type === "project" ? "View Project" : "View Work"}
          <FiArrowRightCircle />
        </SecondaryButton>
      </ShowcaseDataContainer>
      <img src={image} alt="#" />
    </ShowcaseCardStyled>
  );
}

export default ShowcaseCard;
