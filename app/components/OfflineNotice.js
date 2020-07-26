import React from "react";
import { View, StyleSheet, StatusBar, Platform } from "react-native";
import colors from "../config/colors";
import { AppText } from "./AppText";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No internet Connection!</AppText>
      </View>
    );

  if (netInfo.isConnected === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>You are offline!</AppText>
      </View>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    position: "absolute",
    top: StatusBar.currentHeight,
    width: "100%",
    backgroundColor: colors.primary,
    zIndex: 1,
    elevation: Platform.OS === "android" ? 50 : 0,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
