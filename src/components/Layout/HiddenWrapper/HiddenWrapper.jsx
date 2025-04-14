import React from "react";
import { HiddenWrapperStyled } from "./HiddenWrapper.styles";

function HiddenWrapper({ children, hideOn }) {
  return <HiddenWrapperStyled hideOn={hideOn}>{children}</HiddenWrapperStyled>;
}

export default HiddenWrapper;
