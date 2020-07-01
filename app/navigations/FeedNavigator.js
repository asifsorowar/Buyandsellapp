import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "./../screens/ListingsScreen";
import ListingDetailsScreen from "./../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Listings"
      component={ListingsScreen}
      options={{ headerTitleAlign: "center" }}
    />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={{ headerTitleAlign: "center" }}
      options={{
        gestureEnabled: true,
      }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
