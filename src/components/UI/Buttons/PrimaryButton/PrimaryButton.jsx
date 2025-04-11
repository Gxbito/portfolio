import { PrimaryButtonStyled } from "./PrimaryButton.styles";
import { Link } from "react-router-dom";

function PrimaryButton({ children, to }) {
  if (to) {
    return (
      <PrimaryButtonStyled as={Link} to={to}>
        {children}
      </PrimaryButtonStyled>
    );
  }

  return <PrimaryButtonStyled>{children}</PrimaryButtonStyled>;
}

export default PrimaryButton;
