import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  MessageInput,
  FormButton,
  Text,
} from "./SigninElements";

const SignIn = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nzcabm9",
        "template_i0sc00k",
        form.current,
        "RzdTGo1PMvLrcfQyz"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setMessage({
            data: "Wiadomość wysłana poprawnie",
            status: "success",
          });
        },
        (error) => {
          console.log(error.text);
          setMessage({
            data: "Wiadomość nie została wysłana, spróbuj ponownie później",
            status: "error",
          });
        }
      );
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/"></Icon>
          <FormContent>
            <Form ref={form} onSubmit={sendEmail} action="#">
              <FormH1>Skontaktuj się z nami!</FormH1>
              <FormLabel htmlFor="for">Twój Email</FormLabel>
              <FormInput type="email" required name="user_email" />
              <FormLabel htmlFor="for">Imię i nazwisko</FormLabel>
              <FormInput type="name" required name="user_name" />
              <FormLabel htmlFor="for">Treść wiadomości</FormLabel>
              <MessageInput type="text" name="message" required />
              <FormButton type="submit" value="Send">
                Wyślij wiadomość
              </FormButton>
              {message && (
                <Text
                  style={{
                    color: message.status === "success" ? "green" : "red",
                  }}
                >
                  {message.data}
                </Text>
              )}
              <Text>Lub zadzwoń pod numer +48 691 344 276</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
