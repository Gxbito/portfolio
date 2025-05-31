import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FormStyled, SuccessMessageContainer } from "./Form.styles";
import TextArea from "./TextArea/TextArea";
import Input from "./Input/Input";
import PrimaryButton from "../UI/Buttons/PrimaryButton/PrimaryButton";
import AnimatedWrapper from "../Layout/AnimatedWrapper/AnimatedWrapper";
import emailjs from "emailjs-com";

function Form() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);

    emailjs
      .sendForm(
        "service_3ue2y75", // tu service ID
        "template_bflivqm", // tu template ID
        e.target,
        "IMBWPqXyq_WynsS_k" // tu public key
      )
      .then(() => {
        console.log("Mensaje enviado!");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <AnimatedWrapper style={{ width: "100%" }}>
      <FormStyled submitted={submitted} onSubmit={handleSubmit}>
        <h4>Send me a message!</h4>

        <AnimatePresence>
          {submitted && (
            <SuccessMessageContainer submitted={submitted}>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <h2>Mensaje Enviado!</h2>
                <p>
                  ¡Tu mensaje fue recibido con éxito! En breve te contactaré
                  para hablar sobre tu proyecto.
                </p>
              </motion.div>
            </SuccessMessageContainer>
          )}
        </AnimatePresence>

        <Input name="user_name" placeholder="Name" required />
        <Input
          name="user_email"
          placeholder="Email Address"
          type="email"
          required
        />
        <TextArea name="user_message" placeholder="Message" required />

        <PrimaryButton as="button" type="submit">
          Send message
        </PrimaryButton>
      </FormStyled>
    </AnimatedWrapper>
  );
}

export default Form;
