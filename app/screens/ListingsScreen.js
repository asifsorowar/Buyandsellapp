import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigations/routes";
import { AppText } from "./../components/AppText";
import { AppButton } from "../components/Button";
import { getListings } from "./../api/listingApi";
import useApi from "./../hooks/useApi";
import ActivityIndicator from "./../components/ActivityIndicator";

const ListingsScreen = ({ navigation }) => {
  const { data: listings, loading, error, request: loadingListings } = useApi(
    getListings
  );
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadingListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <View
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <AppText>Couldn't retrieve the listings.</AppText>
          <AppButton
            title="Retry"
            color="secondary"
            onPress={loadingListings}
          />
        </View>
      )}
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
        refreshing={refreshing}
        onRefresh={() => loadingListings()}
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

export default ListingsScreen;
