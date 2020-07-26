import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../Button/AppButton.android";

const SubmitButton = ({ title, color, style }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      title={title}
      style={style}
      color={color}
      onPress={handleSubmit}
    />
  );
};

export default SubmitButton;
