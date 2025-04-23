import { TagStyled } from "./Tag.styles";
import * as simpleIcons from "simple-icons";

function Tag({ data }) {
  if (!data) return null;

  const formattedData = data
    ?.replace(/\s/g, "")
    .toLowerCase()
    .replace(/^./, (c) => c.toUpperCase());

  const icon = simpleIcons[`si${formattedData}`];

  console.log;

  return (
    <TagStyled>
      {icon && (
        <svg
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill={`#${icon.hex}`}
        >
          <title>{icon.title}</title>
          <path d={icon.path} />
        </svg>
      )}
      {data}
    </TagStyled>
  );
}

export default Tag;
