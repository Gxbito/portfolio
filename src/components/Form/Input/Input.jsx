import { InputContainer, InputStyled } from "./Input.styles";

function Input({placeholder}) {
  return (
    <InputContainer>
      <InputStyled placeholder={placeholder}/>
    </InputContainer>
  );
}

export default Input;
