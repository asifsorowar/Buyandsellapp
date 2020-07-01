import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { AppText } from "../components/AppText";

import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={listing.image}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.subTitle}</AppText>
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
