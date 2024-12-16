import {
  ShowcaseCardStyled,
  ShowcaseDataContainer,
  DataTextContainer,
} from "./ShowcaseCard.styles";
import { FiArrowRightCircle } from "react-icons/fi";
import SecondaryButton from "../../UI/Buttons/SecondaryButton/SecondaryButton";

function ShowcaseCard({ type }) {
  return (
    <ShowcaseCardStyled>
      <ShowcaseDataContainer>
        <DataTextContainer>
          <h3>E-commerce Pro</h3>
          <p>Aquí encontrarás algunos de mis proyectos destacados.</p>
        </DataTextContainer>
        <SecondaryButton>
          {type === "project" ? "View Project" : "View Work"}
          <FiArrowRightCircle />
        </SecondaryButton>
      </ShowcaseDataContainer>
      <img src="#" alt="#" />
    </ShowcaseCardStyled>
  );
}

export default ShowcaseCard;
