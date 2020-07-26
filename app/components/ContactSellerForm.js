import React from "react";
import { Keyboard, Alert } from "react-native";
import * as Yup from "yup";
// import { Notifications } from "expo";
import { AppForm, AppFormField, SubmitButton } from "./forms";
import messages from "../api/messages";

const ContactSellerForm = ({ listing }) => {
  const validate = Yup.object().shape({
    message: Yup.string().required().min(1).label("Message"),
  });

  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const response = await messages.send(message, listing._id);

    if (!response.ok)
      return Alert.alert("Opps!", "message not send to the seller");

    resetForm();

    // await Notifications.presentLocalNotificationAsync({
    //   title: "Awesome!",
    //   body: "Your message was send to the seller",
    // });

    Alert.alert("Awesome!", "Your message was send to the seller");
  };

  return (
    <AppForm
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validate}
    >
      <AppFormField
        name="message"
        multiline
        numberOfLines={3}
        maxLength={255}
        placeholder="Message....."
      />

      <SubmitButton title="Contact seller" color="secondary" />
    </AppForm>
  );
};

export default ContactSellerForm;
