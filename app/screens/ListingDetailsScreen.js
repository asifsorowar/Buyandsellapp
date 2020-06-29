import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { AppText } from "../components/AppText";

import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/jacket.jpg")}
      ></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale!</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            title="Asif Sorowar"
            subTitle="5 items"
            image={require("../assets/asif.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    height: 300,
    width: "100%",
  },
  title: {
    fontWeight: "500",
    fontSize: 24,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 7,
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default ListingDetailsScreen;
