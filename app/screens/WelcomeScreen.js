import React from "react";
import { View, StyleSheet, Text, ImageBackground, Image } from "react-native";

import { AppButton } from "../components/Button";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          color="primary"
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          title="Registration"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logoContainer: {
    top: 90,
    position: "absolute",
    alignItems: "center",
  },
  logo: {
    height: 70,
    width: 70,
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  tagline: {
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
