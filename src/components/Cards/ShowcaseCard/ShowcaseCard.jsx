import {
  ShowcaseCardStyled,
  ShowcaseDataContainer,
  DataTextContainer,
} from "./ShowcaseCard.styles";

function ShowcaseCard({ id, title, description, images, colors }) {
  const { text, shadow, gradientStart, gradientEnd } = colors;
  const { showcaseCard } = images;

  return (
    <ShowcaseCardStyled to={`/documentation/${id}`} id={id}>
      <ShowcaseDataContainer
        image={showcaseCard}
        gradientStart={gradientStart}
        gradientEnd={gradientEnd}
      >
        <DataTextContainer text={text}>
          <h3>{title}</h3>
          <p>{description}</p>
        </DataTextContainer>

        <img src={showcaseCard} alt={id} />
      </ShowcaseDataContainer>
    </ShowcaseCardStyled>
  );
}

export default ShowcaseCard;
