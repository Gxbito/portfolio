import { PrimaryButtonStyled } from "./PrimaryButton.styles";
import { Link } from "react-router-dom";

function PrimaryButton({ children, to, as = Link, ...props }) {
  if (to) {
    const rel =
      props.target === "_blank" ? "noopener noreferrer" : props.rel;

    return (
      <PrimaryButtonStyled as={as} to={to} {...props} rel={rel}>
        {children}
      </PrimaryButtonStyled>
    );
  }

  return <PrimaryButtonStyled {...props}>{children}</PrimaryButtonStyled>;
}

export default PrimaryButton;
