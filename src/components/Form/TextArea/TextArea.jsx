import { TextAreaContainer, TextAreaStyled } from "./TextArea.styles";

function TextArea({placeholder}) {
  return (
    <TextAreaContainer>
      <TextAreaStyled placeholder={placeholder}/>
    </TextAreaContainer>
  );
}

export default TextArea;
