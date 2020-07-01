import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "./../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title:
      "T1asdaasdasdadasdadasdasdasdasdasdasdasdasdasdasdasdasdasdasdadadasdasdadasdasdasdasdadasdadadadasdadadadad",
    des:
      "D1asdadadsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    image: require("../assets/asif.jpg"),
  },
  {
    id: 2,
    title: "T2",
    des: "D2",
    image: require("../assets/asif.jpg"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.des}
            image={item.image}
            onPress={() => console.log("call pressed")}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              des: "D2",
              image: require("../assets/asif.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
