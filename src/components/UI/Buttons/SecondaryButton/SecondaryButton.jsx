import { SecondaryButtonStyled } from "./SecondaryButton.styles";
import { Link } from "react-router-dom";

function SecondaryButton({ children, to, as = Link, ...props }) {
  if (to) {
    const rel =
      props.target === "_blank" ? "noopener noreferrer" : props.rel;

    return (
      <SecondaryButtonStyled as={as} to={to} {...props} rel={rel}>
        {children}
      </SecondaryButtonStyled>
    );
  }

  return <SecondaryButtonStyled as={as} {...props}>{children}</SecondaryButtonStyled>;
}

export default SecondaryButton;
