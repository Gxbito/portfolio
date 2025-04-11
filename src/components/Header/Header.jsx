import React from "react";
import { HeaderContainer, VerticalLine } from "./Header.styles";
import SecondaryButton from "../UI/Buttons/SecondaryButton/SecondaryButton";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <SecondaryButton>Contáctame</SecondaryButton>
      <VerticalLine />
      <h5>E-Commerce de Moda Optimizado</h5>
      <VerticalLine />
      <SecondaryButton>Contáctame</SecondaryButton>
    </HeaderContainer>
  );
}

export default Header;
