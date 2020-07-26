import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "./../screens/ListingsScreen";
import ListingDetailsScreen from "./../screens/ListingDetailsScreen";
import ListingsScreenByUser from "./../screens/ListingsScreenByUser";
import colors from "../config/colors";

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
    <Stack.Screen
      name="ListingsScreenByUser"
      component={ListingsScreenByUser}
      options={{ headerTitleAlign: "center" }}
      options={({ route }) => ({
        gestureEnabled: true,
        headerTitleAlign: "center",
        headerShown: true,
        gestureDirection: "horizontal",
        title: `Listings of ${route.params.user.firstName} ${route.params.user.lastName}`,
        headerStyle: { backgroundColor: colors.secondary },
        headerTintColor: colors.white,
      })}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
