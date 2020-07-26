import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "./../components/ListItemDeleteAction";
import { AppText } from "./../components/AppText";
import { AppButton } from "../components/Button";
import useApi from "./../hooks/useApi";
import messagesApi from "../api/messages";
import useAuth from "../auth/useAuth";
import ActivityIndicator from "./../components/ActivityIndicator";

const MessagesScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const { user } = useAuth();
  const { data: messages, loading, error, request: getMessages } = useApi(
    messagesApi.getMessages
  );

  useEffect(() => {
    getMessages(user._id, user._id);
  }, []);

  const handleDelete = async (message) => {
    await messagesApi.deleteMessage(message._id);
    return getMessages(user._id, user._id);
  };

  return (
    <Screen>
      {error && (
        <View
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <AppText>Couldn't retrieve the messages.</AppText>
          <AppButton
            title="Retry"
            color="secondary"
            onPress={() => getMessages(user._id, user._id)}
          />
        </View>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={messages}
        keyExtractor={(message) => message._id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.message}
            date={item.date}
            imageUrl={item.sendFrom.photo}
            onPress={() =>
              navigation.navigate("MessageDetailsScreen", {
                message: item,
                user: item.sendFrom,
              })
            }
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => getMessages(user._id, user._id)}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
