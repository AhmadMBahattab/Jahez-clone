import { View, Text, StyleSheet, Linking, Button } from "react-native";
import React, { useEffect } from "react";
import BackToMainHeader from "../components/reusable/BackToMainHeader";

const CallUsScreen = () => {
  useEffect(() => {
    Linking.openURL("tel:8777111223");
  });

  return (
    <>
      <BackToMainHeader title={"اتصل بنا"} />
      <Button
        title="call"
        onPress={() => {
          Linking.openURL("tel:8777111223");
        }}
      />
      {/* <View style={styles.container}>
        <Text>Call us</Text>
      </View> */}
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
