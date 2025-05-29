import React from "react";
import { IconButtonStyled } from "./IconButton.styles";

function IconButton({ children, onClick }) {
  return <IconButtonStyled onClick={onClick}>{children}</IconButtonStyled>;
}

export default IconButton;
