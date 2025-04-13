import React from "react";
import { HeaderContainer, VerticalLine } from "./Header.styles";
import SecondaryButton from "../UI/Buttons/SecondaryButton/SecondaryButton";
import githubIcon from "@/assets/icons/web/GitHub.svg";

function Header() {
  return (
    <HeaderContainer>
      <SecondaryButton to="/contact">Contáctame</SecondaryButton>
      <VerticalLine />
      <h5>E-Commerce de Moda Optimizado</h5>
      <VerticalLine />
      <img src={githubIcon} alt="github" />
    </HeaderContainer>
  );
}

export default Header;
