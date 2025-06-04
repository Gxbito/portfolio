import { SecondaryButtonStyled } from "./SecondaryButton.styles";
import { Link } from "react-router-dom";

function SecondaryButton({ children, to, as = Link, ...props }) {
  if (to) {
    return (
      <SecondaryButtonStyled as={as} to={to} {...props}>
        {children}
      </SecondaryButtonStyled>
    );
  }

  return <SecondaryButtonStyled as={as} {...props}>{children}</SecondaryButtonStyled>;
}

export default SecondaryButton;
