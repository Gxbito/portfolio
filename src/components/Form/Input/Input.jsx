import { useFormContext } from "react-hook-form";
import { InputContainer, InputStyled, FloatingLabel } from "./Input.styles";

function Input({ placeholder, name, type = "text" }) {
  const {
    register,
    formState: { errors, touchedFields },
    watch,
  } = useFormContext();

  const value = watch(name);
  const isTouched = touchedFields[name];
  const showError = errors[name] && isTouched;

  return (
    <InputContainer>
      <InputStyled
        {...register(name)}
        name={name}
        type={type}
        value={value || ""}
        error={showError ? errors[name].message : ""}
      />
      <FloatingLabel isFocused={!!value}>{placeholder}</FloatingLabel>
    </InputContainer>
  );
}

export default Input;
