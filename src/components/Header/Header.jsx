import { HeaderContainer, VerticalLine } from "./Header.styles";
import SecondaryButton from "../UI/Buttons/SecondaryButton/SecondaryButton";
import PrimaryButton from "../UI/Buttons/PrimaryButton/PrimaryButton";
import HiddenWrapper from "../Layout/HiddenWrapper/HiddenWrapper";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

function Header({ name, demo }) {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HiddenWrapper>
        <SecondaryButton as="button" onClick={() => navigate(-1)}>
          <IoArrowBackCircleOutline />
          Go back
        </SecondaryButton>
      </HiddenWrapper>

      <VerticalLine />
      <span>{name}</span>
      <VerticalLine />
      <PrimaryButton
        to={demo}
        target="_blank"
        style={{
          filter: demo ? "" : "grayscale(100%)",
          cursor: demo ? "" : "not-allowed",
        }}
      >
        {demo ? "Visit site " : "Site Offline"}
        {demo && <FiExternalLink />}
      </PrimaryButton>
    </HeaderContainer>
  );
}

export default Header;
