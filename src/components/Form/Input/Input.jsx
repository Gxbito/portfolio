import { useFormContext } from "react-hook-form";
import { InputContainer, InputStyled, FloatingLabel } from "./Input.styles";

function Input({ placeholder, name, type = "text" }) {
  const inputId = `field-${name}`;
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
        id={inputId}
        name={name}
        type={type}
        value={value || ""}
        error={showError ? errors[name].message : ""}
      />
      <FloatingLabel htmlFor={inputId} isFocused={!!value}>
        {placeholder}
      </FloatingLabel>
    </InputContainer>
  );
}

export default Input;
