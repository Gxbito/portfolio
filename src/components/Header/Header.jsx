import React from "react";
import { HeaderContainer, VerticalLine } from "./Header.styles";
import SecondaryButton from "../UI/Buttons/SecondaryButton/SecondaryButton";
import githubIcon from "@/assets/icons/web/GitHub.svg";
import IconButton from "@/components/UI/Buttons/IconButton/IconButton";
import HiddenWrapper from "../Layout/HiddenWrapper/HiddenWrapper";
import { IoArrowBackCircleOutline } from "react-icons/io5";

function Header() {
  return (
    <HeaderContainer>
      <HiddenWrapper hideOn="mobile">
        <SecondaryButton to="/contact">Contáctame</SecondaryButton>
      </HiddenWrapper>
      <HiddenWrapper hideOn="desktop">
        <IconButton>
          <IoArrowBackCircleOutline />
        </IconButton>
      </HiddenWrapper>

      <VerticalLine />
      <h6>E-Commerce de Moda Optimizado</h6>
      <VerticalLine />
      <IconButton>
        <img src={githubIcon} alt="github" />
      </IconButton>
    </HeaderContainer>
  );
}

export default Header;
