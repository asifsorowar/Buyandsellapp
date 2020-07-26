import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText/AppText.android";
import colors from "../config/colors";
import useAuth from "../auth/useAuth";

const Message = ({ message, date, user }) => {
  const { user: currentUser } = useAuth();

  const isCurrentUser = () =>
    user._id.toString() === currentUser._id.toString();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <View>
          <Image
            source={
              isCurrentUser() ? { uri: currentUser.photo } : { uri: user.photo }
            }
            style={[
              styles.image,
              { alignSelf: isCurrentUser() ? "flex-end" : "flex-start" },
            ]}
          />
        </View>
        <View
          style={[
            styles.container,
            {
              backgroundColor: isCurrentUser()
                ? colors.secondary
                : colors.light,
            },
          ]}
        >
          <AppText
            style={{
              color: isCurrentUser() ? colors.light : colors.medium,
            }}
          >
            {message}
          </AppText>
        </View>
      </View>
      <AppText style={styles.subText}>{date}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 10,
    padding: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  subContainer: {
    width: "80%",
  },
  container: {
    padding: 15,
    borderRadius: 10,
  },
  image: {
    height: 30,
    width: 30,
    borderRadius: 35,
    marginBottom: 5,
    marginRight: 5,
  },
  subText: {
    color: colors.light,
    alignSelf: "flex-end",
  },
});

export default Message;
