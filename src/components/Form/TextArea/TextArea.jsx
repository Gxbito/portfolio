import { useFormContext } from "react-hook-form";
import {
  TextAreaContainer,
  TextAreaStyled,
  FloatingLabel,
} from "./TextArea.styles";

function TextArea({ placeholder, name }) {
  const textAreaId = `field-${name}`;
  const {
    register,
    formState: { errors, touchedFields },
    watch,
  } = useFormContext();

  const value = watch(name);
  const isTouched = touchedFields[name];
  const showError = errors[name] && isTouched;

  return (
    <TextAreaContainer>
      <TextAreaStyled
        {...register(name)}
        id={textAreaId}
        name={name}
        value={value || ""}
        error={showError ? errors[name].message : ""}
      />
      <FloatingLabel htmlFor={textAreaId} isFocused={!!value}>
        {placeholder}
      </FloatingLabel>
    </TextAreaContainer>
  );
}

export default TextArea;
