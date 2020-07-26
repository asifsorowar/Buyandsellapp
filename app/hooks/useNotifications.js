import { useEffect } from "react";
import { Platform } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import pushNotification from "../api/expoPushTokens";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();
    channelForAndroid();
    if (notificationListener) Notifications.addListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const { granted } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!granted)
        return alert("Sorry, need to enable permission to make this work!");

      const token = await Notifications.getExpoPushTokenAsync();
      await pushNotification.postPushToken(token);
    } catch (error) {
      console.log("Error occur white getting push notification token.", error);
    }
  };

  const channelForAndroid = () => {
    if (Platform.OS === "android") {
      Notifications.createChannelAndroidAsync("messages", {
        name: "messages",
        priority: "max",
        sound: true,
        vibrate: [0, 250, 500, 250],
      });
    }
  };
};
