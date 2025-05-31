import { TextAreaContainer, TextAreaStyled } from "./TextArea.styles";

function TextArea({placeholder, ...props}) {
  return (
    <TextAreaContainer>
      <TextAreaStyled placeholder={placeholder} {...props}/>
    </TextAreaContainer>
  );
}

export default TextArea;
