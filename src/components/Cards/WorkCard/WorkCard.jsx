import {
  WorkCardStyled,
  ImageCardContainer,
  TextCardContainer,
} from "./WorkCard.styles";
import Tag from "../../UI/Tag/Tag";

function WorkCard() {
  return (
    <WorkCardStyled to="/documentation">
      <ImageCardContainer>
        <Tag>2024</Tag>
        <TextCardContainer>
          <span>TRENDSETTER THREADS</span>
          <h4>E-Commerce Pro</h4>
        </TextCardContainer>
      </ImageCardContainer>
    </WorkCardStyled>
  );
}

export default WorkCard;
