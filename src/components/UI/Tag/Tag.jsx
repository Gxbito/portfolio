import { TagStyled } from "./Tag.styles"

function Tag({children, data}) {
  return (
    <TagStyled>
      {children}
      {data}
    </TagStyled>
  )
}

export default Tag
