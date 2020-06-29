import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import AppText from "./AppText/AppText";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({
  image,
  title,
  subTitle,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <>
      {Platform.OS === "android" && (
        <Swipeable renderRightActions={renderRightActions}>
          <TouchableNativeFeedback onPress={onPress}>
            <View style={styles.listContainer}>
              {IconComponent}
              {image && <Image source={image} style={styles.image} />}
              <View style={styles.textContainer}>
                <AppText style={styles.title} numberOfLines={1}>
                  {title}
                </AppText>
                {subTitle && (
                  <AppText style={styles.subTitle} numberOfLines={2}>
                    {subTitle}
                  </AppText>
                )}
              </View>
              <MaterialCommunityIcons
                color={colors.medium}
                name="chevron-right"
                size={25}
              />
            </View>
          </TouchableNativeFeedback>
        </Swipeable>
      )}

      {Platform.OS === "ios" && (
        <Swipeable renderRightActions={renderRightActions}>
          <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
            <View style={styles.listContainer}>
              {IconComponent}
              {image && <Image source={image} style={styles.image} />}
              <View style={styles.textContainer}>
                <AppText style={styles.title}>{title}</AppText>
                {subTitle && (
                  <AppText style={styles.subTitle}>{subTitle}</AppText>
                )}
              </View>
              <MaterialCommunityIcons
                color={colors.medium}
                name="chevron-right"
                size={25}
              />
            </View>
          </TouchableHighlight>
        </Swipeable>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white,
  },

  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },

  textContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },

  title: {
    fontWeight: "500",
  },
  subTitle: {
    fontWeight: "200",
    color: colors.medium,
  },
});

export default ListItem;
