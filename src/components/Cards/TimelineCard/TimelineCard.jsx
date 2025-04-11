import { TimelineCardStyled, TextContainer } from "./TimelineCard.styles";

function TimelineCard({ icon, category, title, text, year }) {
  return (
    <TimelineCardStyled>
      <img src={icon} alt={title} />

      <TextContainer>
        <span>{category}</span>
        <h4>{title}</h4>
        <p>{text}</p>
      </TextContainer>
      <span>{year}</span>
    </TimelineCardStyled>
  );
}

export default TimelineCard;
