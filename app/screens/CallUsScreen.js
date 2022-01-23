import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BackToMainHeader from "../components/reusable/BackToMainHeader";

const CallUsScreen = () => {
  return (
    <>
      <BackToMainHeader title={"اتصل بنا"} />
      <View style={styles.container}>
        <Text>Call us</Text>
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

export default CallUsScreen;
