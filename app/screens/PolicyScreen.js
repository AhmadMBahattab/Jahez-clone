import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BackToMainHeader from "../components/reusable/BackToMainHeader";

const PolicyScreen = () => {
  return (
    <>
      <BackToMainHeader title={"سياستنا"} />
      <View style={styles.container}>
        <Text>سياستنا</Text>
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

export default PolicyScreen;
