import React from "react";
import { useFormikContext } from "formik";
import ImageInput from "./../ImageInput";
import ErrorMessage from "./ErrorMessage";

const FormImagePicker = ({ name }) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  let imageUri = values[name];

  return (
    <>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setFieldValue(name, uri)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
