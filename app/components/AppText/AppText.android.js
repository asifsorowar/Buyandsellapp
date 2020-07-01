import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../../config/colors";

const AppText = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto",
    fontSize: 20,
  },
});

export default AppText;
