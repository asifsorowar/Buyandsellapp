import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "./../screens/AccountScreen";
import MessagesScreen from "./../screens/MessagesScreen";
import ListingsScreenByUser from "./../screens/ListingsScreenByUser";
import colors from "../config/colors";
import ProfileScreen from "./../screens/ProfileScreen";
import MessageDetailsScreen from "./../screens/MessageDetailsScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: colors.secondary },
      headerTintColor: colors.white,
    }}
  >
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ gestureEnabled: true, gestureDirection: "horizontal" }}
    />
    <Stack.Screen
      name="Messages"
      component={MessagesScreen}
      options={{ gestureEnabled: true, gestureDirection: "horizontal" }}
    />
    <Stack.Screen
      name="MessageDetailsScreen"
      component={MessageDetailsScreen}
      options={({ route }) => ({
        gestureEnabled: true,
        gestureDirection: "horizontal",
        title: "Messages with - " + route.params.user.firstName,
      })}
    />
    <Stack.Screen
      name="MyListings"
      component={ListingsScreenByUser}
      options={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        title: "My Listings",
      }}
    />
    {/* <Stack.Screen />
    <Stack.Screen /> */}
  </Stack.Navigator>
);

export default AccountNavigator;
