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
  const [formValid, setFormValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false); // nowy stan

  const validatePhone = (phone) => {
    const regex = /^\d{9}$/;
    return regex.test(phone);
  };

  const checkFormValidity = () => {
    const formElements = form.current.elements;
    let isValid = true;
    for (let i = 0; i < formElements.length; i++) {
      if (!formElements[i].value) {
        isValid = false;
        break;
      }
      if (
        formElements[i].name === "user_phone" &&
        !validatePhone(formElements[i].value)
      ) {
        isValid = false;
        break;
      }
    }
    setFormValid(isValid);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setFormSubmitted(true); // ustawiamy formularz jako wysłany

    emailjs
      .sendForm(
        "service_5uayywx",
        "template_i0sc00k",
        form.current,
        "A5BS-_DpnOfZg43-8"
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
            <Form
              ref={form}
              onSubmit={sendEmail}
              action="#"
              onChange={checkFormValidity}
            >
              <FormH1>Skontaktuj się z nami!</FormH1>
              <FormLabel htmlFor="for">Twój Email</FormLabel>
              <FormInput type="email" required name="user_email" />
              <FormLabel htmlFor="for">Imię i nazwisko</FormLabel>
              <FormInput type="name" required name="user_name" />
              <FormLabel htmlFor="for">Numer telefonu (PL)</FormLabel>
              <FormInput type="text" required name="user_phone" />
              <FormLabel htmlFor="for">Treść wiadomości</FormLabel>
              <MessageInput type="text" name="message" required />
              <FormButton
                type="submit"
                value="Send"
                disabled={!formValid || formSubmitted}
              >
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
