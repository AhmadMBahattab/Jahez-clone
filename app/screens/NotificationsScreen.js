import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BackToMainHeader from "../components/reusable/BackToMainHeader";

const NotificationsScreen = () => {
  return (
    <>
      <BackToMainHeader />
      <View style={styles.container}>
        <Text>Notifications</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NotificationsScreen;
