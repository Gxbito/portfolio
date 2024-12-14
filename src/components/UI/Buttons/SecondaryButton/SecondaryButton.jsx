import { SecondaryButtonStyled } from "./SecondaryButton.styles"

function SecondaryButton({children}) {
  return (
    <SecondaryButtonStyled>
      {children}
    </SecondaryButtonStyled>
  )
}

export default SecondaryButton
