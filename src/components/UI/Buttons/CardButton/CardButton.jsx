import { CardButtonStyled } from "./CardButton.styles"

function CardButton({children}) {
  return (
    <CardButtonStyled>
      {children}
    </CardButtonStyled>
  )
}

export default CardButton
