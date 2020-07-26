import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "./../components/Screen";
import CategoryPickerItem from "./../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import { addListing } from "../api/listingApi";
import UploadScreen from "./UploadScreen";

const ListingEditScreen = () => {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [process, setProcess] = useState(0);
  const location = useLocation();

  const validateSchema = Yup.object().shape({
    title: Yup.string().required().label("Title"),
    price: Yup.number().min(1).required().label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image."),
  });

  const categories = [
    { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
    { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
    { label: "Camera", value: 3, backgroundColor: "red", icon: "apps" },
    { label: "Camera", value: 4, backgroundColor: "red", icon: "apps" },
    { label: "Camera", value: 5, backgroundColor: "red", icon: "apps" },
    { label: "Camera", value: 6, backgroundColor: "red", icon: "apps" },
    { label: "Camera", value: 7, backgroundColor: "red", icon: "apps" },
    { label: "Camera", value: 8, backgroundColor: "red", icon: "apps" },
    { label: "Camera", value: 9, backgroundColor: "red", icon: "apps" },
  ];

  const handleSubmit = async (values, { resetForm, setErrors }) => {
    setProcess(0);
    setUploadVisible(true);
    const response = await addListing({ ...values, location }, (process) =>
      setProcess(process)
    );
    if (!response.ok) {
      setUploadVisible(false);
      return setErrors({ title: response.data });
    }

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        process={process}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validateSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField name="title" maxLength={255} placeholder="Title" />
        <View>
          <AppFormField
            name="price"
            keyboardType="numeric"
            maxLength={9}
            placeholder="Price"
            width={120}
          />
          <AppFormPicker
            name="category"
            items={categories}
            PickerItemComponent={CategoryPickerItem}
            numColumns={3}
            placeholder="Category"
            width="50%"
          />
        </View>

        <AppFormField
          name="description"
          placeholder="Description"
          numberOfLines={3}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
  },
  subContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ListingEditScreen;
