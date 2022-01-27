import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BackToMainHeader from "../components/reusable/BackToMainHeader";

const NotificationsScreen = () => {
  return (
    <>
      <BackToMainHeader title={"الاشعارات"} />
      <View style={styles.container}>
        <Text style={{ color: "gray", fontSize: 18 }}>
          لا يوجد اشعارات حتى هذه اللحظة
        </Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
  },
});

export default NotificationsScreen;
