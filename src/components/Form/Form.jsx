import { FormStyled } from "./Form.styles";
import TextArea from "./TextArea/TextArea";
import Input from "./Input/Input";
import CardButton from "../UI/Buttons/CardButton/CardButton";
import AnimatedWrapper from "../Layout/AnimatedWrapper/AnimatedWrapper";

function Form() {
  return (
    <AnimatedWrapper style={{ width: "100%" }}>
      <FormStyled>
        <h4>Send me a message!</h4>
        <Input />
        <Input />
        <TextArea />
        <CardButton>Send message</CardButton>
      </FormStyled>
    </AnimatedWrapper>
  );
}

export default Form;
