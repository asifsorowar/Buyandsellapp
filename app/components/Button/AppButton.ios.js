import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../../config/colors";

const AppButton = ({ title, onPress, color = "primary", style }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color], style }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
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
    fontSize: 20,
    fontFamily: "Avenir",
    color: colors.white,
  },
});

export default AppButton;
