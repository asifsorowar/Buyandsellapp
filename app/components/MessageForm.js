import React from "react";
import { Keyboard, Alert, View } from "react-native";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "./forms";
import replyMessagesApi from "../api/replyMessages";

const MessageForm = ({ parentMessageId, user, onRefresh }) => {
  const validate = Yup.object().shape({
    message: Yup.string().required().min(1).label("Message"),
  });

  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const response = await replyMessagesApi.send(
      message,
      parentMessageId,
      user._id
    );

    if (!response.ok) return Alert.alert("Opps!", "message not send.");

    resetForm();
    onRefresh();
  };

  return (
    <AppForm
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validate}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexShrink: 1 }}>
          <AppFormField
            name="message"
            multiline
            numberOfLines={2}
            maxLength={255}
            placeholder="Message....."
            width="95%"
          />
        </View>

        <View>
          <SubmitButton
            title="send"
            color="secondary"
            style={{ borderRadius: 13 }}
          />
        </View>
      </View>
    </AppForm>
  );
};

export default MessageForm;
