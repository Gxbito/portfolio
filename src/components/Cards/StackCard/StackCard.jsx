import {
  StackCardStyled,
  StackTextContainer,
  StackContainer,
} from "./StackCard.styles";
import { CardButton } from "../../index";
import Technology from "../../UI/Technology/Technology";

function StackCard() {
  return (
    <StackCardStyled>
      <StackTextContainer>
        <h4>Sample text</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
          nesciunt?
        </p>
      </StackTextContainer>

      <StackContainer>
        <Technology
          type="react"
        />
        <Technology
          type="wordpress"
        />
        <Technology
          type="javascript"
        />
        <Technology
          type="materialui"
        />

        <CardButton>View all tecnologies</CardButton>
      </StackContainer>
    </StackCardStyled>
  );
}

export default StackCard;
