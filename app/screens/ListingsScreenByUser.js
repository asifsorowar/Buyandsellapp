import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigations/routes";
import useApi from "./../hooks/useApi";
import { getListingByUser } from "./../api/listingApi";
import ActivityIndicator from "./../components/ActivityIndicator";

const ListingsScreenByUser = ({ navigation, route }) => {
  const { user } = route.params;

  const { data: listings, loading, request: listingQueryByUser } = useApi(
    getListingByUser
  );

  useEffect(() => {
    listingQueryByUser(user._id);
  }, []);

  return (
    <Screen style={styles.screen}>
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(list) => list._id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={item.price + " tk"}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default ListingsScreenByUser;
