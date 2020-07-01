import React, { useState, useEffect } from "react";
import { StyleSheet, View, Switch, Button, Image, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { AppText } from "./app/components/AppText";
import { AppButton } from "./app/components/Button";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigation from "./app/navigations/AuthNavigation";
import navigationTheme from "./app/navigations/navigationTheme";
import AppNavigator from "./app/navigations/AppNavigator";

export default function App() {
  const Tweets = ({ navigation }) => (
    <Screen style={{ backgroundColor: "yellow" }}>
      <Text>Tweets</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate("TweetDetails", { id: 5 })}
      />
    </Screen>
  );

  const TweetDetails = ({ navigation, route }) => (
    <Screen style={{ backgroundColor: "red" }}>
      <Text>Tweet details - {route.params.id} </Text>
      <Button title="Previous" onPress={() => navigation.navigate("Tweets")} />
    </Screen>
  );

  const Account = ({ navigation }) => (
    <Screen style={{ backgroundColor: "red" }}>
      <Text>Account</Text>
    </Screen>
  );

  const Stack = createStackNavigator();

  const StackNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweets} />
      <Stack.Screen
        name="TweetDetails"
        component={TweetDetails}
        options={({ route }) => ({
          title: `Tweet of ${route.params.id}`,
        })}
      />
    </Stack.Navigator>
  );

  const Tab = createBottomTabNavigator();

  const BottomTabNavigator = () => (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "tomato",
        activeTintColor: "white",
      }}
    >
      <Tab.Screen
        name="Tweets"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    paddingTop: 100,
    backgroundColor: "#f8f4f4",
  },
});
