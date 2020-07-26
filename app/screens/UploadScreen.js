import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";
import colors from "../config/colors";

const UploadScreen = ({ onDone, process = 0, visible = false }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {process < 1 ? (
          <Progress.Bar
            progress={process}
            color={colors.secondary}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  animation: {
    width: 200,
  },
});

export default UploadScreen;
