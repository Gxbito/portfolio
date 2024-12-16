import { TextWrapperStyled } from "./TextWrapper.styles"

function TextWrapper({children}) {
  return (
    <TextWrapperStyled>
      {children}
    </TextWrapperStyled>
  )
}

export default TextWrapper
