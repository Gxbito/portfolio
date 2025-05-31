import { PrimaryButtonStyled } from "./PrimaryButton.styles";
import { Link } from "react-router-dom";

function PrimaryButton({ children, to, as = Link, ...props }) {
  if (to) {
    return (
      <PrimaryButtonStyled as={as} to={to} {...props}>
        {children}
      </PrimaryButtonStyled>
    );
  }

  return <PrimaryButtonStyled {...props}>{children}</PrimaryButtonStyled>;
}

export default PrimaryButton;
