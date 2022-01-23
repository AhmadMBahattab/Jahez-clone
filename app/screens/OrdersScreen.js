import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BackToMainHeader from "../components/reusable/BackToMainHeader";

const OrderScreen = () => {
  return (
    <>
      <BackToMainHeader title={"طلباتي"} />
      <View style={styles.container}>
        <Text>Orders</Text>
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

export default OrderScreen;
