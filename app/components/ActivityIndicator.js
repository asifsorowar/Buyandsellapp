import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

const ActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <LottieView
        loop
        autoPlay
        source={require("../animations/loading.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    opacity: 0.6,
    position: "absolute",
    zIndex: 1,
    elevation: 1,
  },
});

export default ActivityIndicator;
