import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FormStyled,
  SuccessMessageContainer,
  Spinner,
  FillBar,
} from "./Form.styles";
import TextArea from "./TextArea/TextArea";
import Input from "./Input/Input";
import PrimaryButton from "../UI/Buttons/PrimaryButton/PrimaryButton";
import AnimatedWrapper from "../Layout/AnimatedWrapper/AnimatedWrapper";
import emailjs from "emailjs-com";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";

function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const validationSchema = Yup.object().shape({
    user_name: Yup.string().required("El nombre es obligatorio"),
    user_email: Yup.string().required("El correo es obligatorio"),
    user_message: Yup.string().required("El mensaje es obligatorio"),
  });

  const methods = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data) => {
    try {
      setIsSending(true);

      await emailjs.send(
        "service_3ue2y75",
        "template_bflivqm",
        {
          user_name: data.user_name,
          user_email: data.user_email,
          message: data.user_message,
        },
        "IMBWPqXyq_WynsS_k"
      );

      setSubmitted(true);
      reset();

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error("Error al enviar:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <AnimatedWrapper style={{ width: "100%" }}>
      <FormProvider {...methods}>
        <FormStyled onSubmit={handleSubmit(onSubmit)} submitted={submitted}>
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

          <Input name="user_name" placeholder="Name" />
          <Input name="user_email" placeholder="Email Address" type="email" />
          <TextArea name="user_message" placeholder="Message" />

          <PrimaryButton as="button" type="submit" disabled={isSending}>
            {isSending ? (
              <>
                <Spinner />
                <FillBar />
              </>
            ) : (
              "Send message"
            )}
          </PrimaryButton>
        </FormStyled>
      </FormProvider>
    </AnimatedWrapper>
  );
}

export default Form;
