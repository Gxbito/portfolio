import { TimelineCardStyled, TextContainer } from "./TimelineCard.styles";

function TimelineCard({ icon, category, title, text, year }) {
  return (
    <TimelineCardStyled>
      <img
        src={icon}
        alt=""
        width="52"
        height="52"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />

      <TextContainer>
        <span>{category}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </TextContainer>
      <span>{year}</span>
    </TimelineCardStyled>
  );
}

export default TimelineCard;
