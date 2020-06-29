import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText/AppText.android";
import colors from "../config/colors";

const Card = ({ image, title, subtitle }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={image} />
      <View style={styles.cardTextContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardTextContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
