import React from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import Screen from "./../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { AppText } from "../components/AppText";
import colors from "../config/colors";
import AppButton from "../components/Button/AppButton";

const RegisterScreen = ({ navigation }) => {
  const validateSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().min(4).required().label("Password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match.")
      .required("Confirm Password is required."),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        onSubmit={handleSubmit}
        validationSchema={validateSchema}
      >
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />

        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          secureTextEntry
          placeholder="Password"
          textContentType="password"
        />

        <AppFormField
          name="confirmPassword"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          secureTextEntry
          placeholder="Confirm Password"
          textContentType="password"
        />
        <SubmitButton title="Register" color="secondary" />
      </AppForm>
      <View style={styles.LoginOptionContainer}>
        <AppText style={{ color: colors.medium }}>
          Already have an account?
        </AppText>
        <AppButton
          style={styles.loginAccountText}
          title="Login"
          color="primary"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 80,
    marginBottom: 20,
  },
  LoginOptionContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  loginAccountText: { width: "25%", height: 10 },
});

export default RegisterScreen;
