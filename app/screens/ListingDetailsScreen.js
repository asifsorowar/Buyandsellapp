import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AppText } from "../components/AppText";

import colors from "../config/colors";
import ListItem from "../components/ListItem";
import ContactSellerForm from "../components/ContactSellerForm";
import useApi from "./../hooks/useApi";
import { getListingByUser } from "./../api/listingApi";
import ActivityIndicator from "./../components/ActivityIndicator";
import MyMapView from "../components/MapView";
import { ScrollView } from "react-native-gesture-handler";

const ListingDetailsScreen = ({ navigation, route }) => {
  const listing = route.params;

  const { data: listingsByUser, loading, request: listingQueryByUser } = useApi(
    getListingByUser
  );

  useEffect(() => {
    listingQueryByUser(listing.user._id);
  }, []);

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      >
        <ActivityIndicator visible={loading} />
        <Image
          style={styles.image}
          source={{ uri: listing.images[0].url }}
        ></Image>
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.price}>{`${listing.price} tk`}</AppText>
          <AppText style={styles.description}>{listing.description}</AppText>
          <View style={styles.userContainer}>
            <ListItem
              title={`${listing.user.firstName} ${listing.user.lastName}`}
              subTitle={`${listingsByUser.length} items`}
              imageUrl={listing.user.photo}
              onPress={() =>
                navigation.navigate("ListingsScreenByUser", {
                  user: listing.user,
                })
              }
            />
          </View>
          <MyMapView
            latitude={listing.location.latitude}
            longitude={listing.location.longitude}
          />
          <ContactSellerForm listing={listing} />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
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
  description: {
    color: colors.medium,
    fontSize: 16,
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default ListingDetailsScreen;
