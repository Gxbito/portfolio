import { SecondaryButtonStyled } from "./SecondaryButton.styles"
import { Link } from "react-router-dom";

function SecondaryButton({ children, to }) {
  if (to) {
    return (
      <SecondaryButtonStyled as={Link} to={to}>
        {children}
      </SecondaryButtonStyled>
    );
  }

  return <SecondaryButtonStyled>{children}</SecondaryButtonStyled>;
}

export default SecondaryButton
