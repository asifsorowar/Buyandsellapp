import React from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import Screen from "./../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { AppText } from "../components/AppText";
import colors from "../config/colors";
import AppButton from "../components/Button/AppButton";
import userService from "../api/users";
import useAuth from "../auth/useAuth";
import useApi from "./../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const RegisterScreen = ({ navigation }) => {
  const { logIn } = useAuth();
  const registerApi = useApi(userService.register);

  const validateSchema = Yup.object().shape({
    firstName: Yup.string().min(2).required().label("First name"),
    lastName: Yup.string().min(2).required().label("Last name"),
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().min(4).required().label("Password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match.")
      .required("Confirm Password is required."),
  });

  const handleSubmit = async (
    { firstName, lastName, email, password },
    { setErrors }
  ) => {
    const response = await registerApi.request(
      firstName,
      lastName,
      email,
      password
    );
    if (!response.ok) return setErrors({ email: response.data });

    logIn(response.headers["x-auth-token"]);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validateSchema}
        >
          <AppFormField
            name="firstName"
            autoCorrect={false}
            icon="user"
            iconSet="FontAwesome"
            placeholder="First Name"
            width="70%"
          />
          <AppFormField
            name="lastName"
            autoCorrect={false}
            icon="user"
            iconSet="AntDesign"
            placeholder="Last Name"
            width="80%"
          />
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
            iconSet="AntDesign"
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
