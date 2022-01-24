import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BackToMainHeader from "../components/reusable/BackToMainHeader";

const AccountScreen = () => {
  return (
    <>
      <BackToMainHeader title={"حسابي"} />
      <View style={styles.container}>
        <Text>حسابي</Text>
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

export default AccountScreen;
