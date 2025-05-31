import { InputContainer, InputStyled } from "./Input.styles";

function Input({placeholder, ...props}) {
  return (
    <InputContainer>
      <InputStyled placeholder={placeholder} {...props}/>
    </InputContainer>
  );
}

export default Input;
