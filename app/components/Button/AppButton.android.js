import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import colors from "../../config/colors";

const AppButton = ({ title, onPress, color = "primary", style }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={[styles.button, { backgroundColor: colors[color] }, style]}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 15,
    width: "100%",
    borderRadius: 25,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
