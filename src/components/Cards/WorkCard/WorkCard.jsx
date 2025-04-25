import {
  WorkCardStyled,
  ImageCardContainer,
  TextCardContainer,
  LogoContainer
} from "./WorkCard.styles";
import Tag from "@/components/UI/Tag/Tag";
import stars from "@/assets/vectors/stars.svg";

function WorkCard({ id, title, name, images, year, colors, logo }) {
  const { mainCard } = images;
  const { gradientStart, gradientEnd, text } = colors;

  return (
    <WorkCardStyled to={`/documentation/${id}`} id={id}>
      <ImageCardContainer
        image={mainCard}
        gradientStart={gradientStart}
        gradientEnd={gradientEnd}
      >
        <img src={stars} alt="stars" />
        <LogoContainer gradientStart={gradientStart} borderColor={text}>
          <img src={logo} alt={id} />
        </LogoContainer>
        <Tag data={year} />
        <TextCardContainer>
          <span>{name}</span>
          <h4>{title}</h4>
        </TextCardContainer>
      </ImageCardContainer>
    </WorkCardStyled>
  );
}

export default WorkCard;
