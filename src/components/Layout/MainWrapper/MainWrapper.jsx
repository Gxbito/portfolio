import { MainWrapperStyled } from "./MainWrapper.styles"

function MainWrapper({children}) {
  return (
    <MainWrapperStyled>
      {children}
    </MainWrapperStyled>
  )
}

export default MainWrapper
