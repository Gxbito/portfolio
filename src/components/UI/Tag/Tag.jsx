import { TagStyled } from "./Tag.styles";

function Tag({ data }) {
  if (!data) return null;

  return <TagStyled>{data}</TagStyled>;
}

export default Tag;
