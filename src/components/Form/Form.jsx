import { FormStyled } from "./Form.styles";
import TextArea from "./TextArea/TextArea";
import Input from "./Input/Input";
import CardButton from "../UI/Buttons/CardButton/CardButton";

function Form() {
  return (
    <FormStyled>
      <h4>Send me a message!</h4>
      <Input />
      <Input />
      <TextArea />
      <CardButton>
        Send message
      </CardButton>
    </FormStyled>
  );
}

export default Form;
