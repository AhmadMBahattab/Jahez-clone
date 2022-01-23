import { View, Text, StyleSheet } from "react-native";
import React from "react";
import BackToMainHeader from "../components/reusable/BackToMainHeader";

const AboutJahezScreen = () => {
  return (
    <>
      <BackToMainHeader title={"عن جاهز"} />
      <View style={styles.container}>
        <Text>About Jahez</Text>
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

export default AboutJahezScreen;
