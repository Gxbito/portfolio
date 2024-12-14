import { PrimaryButtonStyled } from "./PrimaryButton.styles"

function PrimaryButton({children}) {
  return (
    <PrimaryButtonStyled>
      {children}
    </PrimaryButtonStyled>
  )
}

export default PrimaryButton
