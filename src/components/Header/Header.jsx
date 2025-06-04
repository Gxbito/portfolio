import { HeaderContainer, VerticalLine } from "./Header.styles";
import SecondaryButton from "../UI/Buttons/SecondaryButton/SecondaryButton";
import PrimaryButton from "../UI/Buttons/PrimaryButton/PrimaryButton";
// import githubIcon from "@/assets/icons/web/GitHub.svg";
// import IconButton from "@/components/UI/Buttons/IconButton/IconButton";
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
      <h4>{name}</h4>
      <VerticalLine />
      <PrimaryButton to={demo} target="_blank">
        View site
        <FiExternalLink />
      </PrimaryButton>
      {/* <IconButton>
        <img src={githubIcon} alt="github" />
      </IconButton> */}
    </HeaderContainer>
  );
}

export default Header;
