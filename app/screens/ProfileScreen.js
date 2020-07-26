import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  SubmitButton,
  FormSingleImagePicker,
} from "../components/forms";
import Screen from "./../components/Screen";
import { addListing } from "../api/listingApi";
import UploadScreen from "./UploadScreen";
import AppText from "./../components/AppText/AppText.android";
import colors from "../config/colors";
import { AppButton } from "./../components/Button";
import useAuth from "../auth/useAuth";

const ProfileScreen = () => {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [process, setProcess] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  const { user } = useAuth();

  const validateSchema = Yup.object().shape({
    firstName: Yup.string().min(1).label("Title"),
    lastName: Yup.string().min(1).label("Price"),
    email: Yup.string().label("Description"),
  });

  const handleSubmit = async (values, { resetForm, setErrors }) => {
    // setProcess(0);
    // setUploadVisible(true);
    // const response = await addListing({ ...values, location }, (process) =>
    //   setProcess(process)
    // );
    // if (!response.ok) {
    //   setUploadVisible(false);
    //   return setErrors({ title: response.data });
    // }
    // resetForm();
    console.log(values);
  };

  return (
    <Screen style={styles.container}>
      {!isEdit ? (
        <>
          <AppButton
            title="Edit"
            color="secondary"
            style={{ width: "30%", alignSelf: "flex-end", padding: 10 }}
            onPress={() => setIsEdit(true)}
          />
          <View style={styles.viewPage}>
            <Image
              source={require("../assets/asif.jpg")}
              resizeMode="cover"
              style={styles.profilePicture}
            />
            <View style={styles.subViewPage}>
              <View style={styles.titleContainer}>
                <AppText style={styles.label}>Fist Name:</AppText>
                <AppText style={styles.title}>{user.firstName}</AppText>
              </View>
              <View style={styles.titleContainer}>
                <AppText style={styles.label}>Last Name:</AppText>
                <AppText style={styles.title}>{user.lastName}</AppText>
              </View>
              <View style={styles.titleContainer}>
                <AppText style={styles.label}>Email:</AppText>
                <AppText style={styles.title}>{user.email}</AppText>
              </View>
            </View>
          </View>
        </>
      ) : (
        <>
          <UploadScreen
            onDone={() => setUploadVisible(false)}
            process={process}
            visible={uploadVisible}
          />
          <AppButton
            title="x"
            color="danger"
            style={{ width: "15%", alignSelf: "flex-end", padding: 5 }}
            onPress={() => setIsEdit(false)}
          />
          <AppForm
            initialValues={{
              profilePicture: null,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
            }}
            onSubmit={handleSubmit}
            validationSchema={validateSchema}
          >
            <FormSingleImagePicker name="profilePicture" />
            <AppFormField
              name="firstName"
              placeholder="First Name"
              icon="user"
              iconSet="FontAwesome"
              autoCorrect={false}
              width="70%"
            />
            <AppFormField
              name="lastName"
              placeholder="Last Name"
              autoCorrect={false}
              icon="user"
              iconSet="AntDesign"
              width="80%"
            />

            <AppFormField
              name="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <SubmitButton title="Edit" color="secondary" />
          </AppForm>
        </>
      )}
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
  viewPage: {
    backgroundColor: colors.light,
    borderRadius: 15,
    overflow: "hidden",
  },
  subViewPage: {
    padding: 30,
  },
  label: {
    fontWeight: "bold",
    color: colors.secondary,
    marginVertical: 10,
  },
  title: {
    color: colors.medium,
    marginLeft: 20,
  },
  titleContainer: { flexDirection: "row", alignItems: "center" },
  profilePicture: {
    width: "100%",
    height: 300,
    alignSelf: "center",
  },
});

export default ProfileScreen;
