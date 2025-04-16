import {
  WorkCardStyled,
  ImageCardContainer,
  TextCardContainer,
} from "./WorkCard.styles";
import Tag from "../../UI/Tag/Tag";

function WorkCard({id, title, name, image, year}) {
  return (
    <WorkCardStyled to={`/documentation/${id}`} id={id}>
      <ImageCardContainer image={image}>
        <Tag>{year}</Tag>
        <TextCardContainer>
          <span>{name}</span>
          <h4>{title}</h4>
        </TextCardContainer>
      </ImageCardContainer>
    </WorkCardStyled>
  );
}

export default WorkCard;
