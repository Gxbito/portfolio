import { CardButtonStyled } from "./CardButton.styles"
import { Link } from "react-router-dom";

function CardButton({ children, to }) {
  if (to) {
    return (
      <CardButtonStyled as={Link} to={to}>
        {children}
      </CardButtonStyled>
    );
  }

  return <CardButtonStyled>{children}</CardButtonStyled>;
}


export default CardButton
