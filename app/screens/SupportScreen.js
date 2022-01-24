import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BackToMainHeader from "../components/reusable/BackToMainHeader";

const SupportScreen = () => {
  return (
    <>
      <BackToMainHeader title={"الدعم"} />
      <View style={styles.container}>
        <Text>الدعم</Text>
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

export default SupportScreen;
