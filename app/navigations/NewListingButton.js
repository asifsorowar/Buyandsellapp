import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onPress();
      }}
    >
      <View>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={35}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: 70,
    bottom: 15,
    borderWidth: 10,
    borderColor: colors.white,
    borderRadius: 35,
  },
});

export default NewListingButton;
