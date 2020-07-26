import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Screen from "../components/Screen";
import { AppText } from "../components/AppText";
import colors from "../config/colors";
import Message from "../components/Message";
import useAuth from "../auth/useAuth";
import MessageForm from "./../components/MessageForm";
import useApi from "./../hooks/useApi";
import replyMessagess from "../api/replyMessages";

const MessageDetailsScreen = ({ route }) => {
  const { user, message } = route.params;
  const [refreshing, setRefreshing] = useState(false);

  const {
    data: replyMessages,
    error,
    loading,
    request: replyMessageApi,
  } = useApi(replyMessagess.getReplyMessages);

  useEffect(() => {
    replyMessageApi(message._id);
  }, []);

  const flatList = useRef();

  return (
    <Screen style={styles.container}>
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
            onPress={() => replyMessageApi(message._id)}
          />
        </View>
      )}
      <AppText style={styles.text}>connected with {user.email}</AppText>
      <FlatList
        ref={flatList}
        data={replyMessages}
        keyExtractor={(message) => message._id.toString()}
        onContentSizeChange={() => flatList.current.scrollToEnd()}
        renderItem={({ item }) => (
          <Message
            message={item.message}
            date={new Date(item.date).toLocaleString()}
            user={item.sendFrom}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => replyMessageApi(message._id)}
      />

      <View style={{ width: "85%", alignSelf: "center" }}>
        <MessageForm
          parentMessageId={message._id.toString()}
          user={user}
          onRefresh={() => replyMessageApi(message._id)}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    color: colors.light,
  },
  text: {
    color: colors.light,
  },
});

export default MessageDetailsScreen;
