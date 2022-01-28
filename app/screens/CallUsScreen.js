import {
  View,
  Text,
  StyleSheet,
  Linking,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import BackToMainHeader from "../components/reusable/BackToMainHeader";
import { useNavigation } from "@react-navigation/native";

const CallUsScreen = () => {
  const navigation = useNavigation();
  // useEffect(() => {
  //   navigation.navigate("الرئيسية");
  //   Linking.openURL("tel:8777111223");
  // });

  return (
    <>
      <BackToMainHeader title={"اتصل بنا"} />
      <View style={styles.container}>
        <View style={styles.callButton}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("tel:8777111223");
              navigation.navigate("الرئيسية");
            }}
          >
            <Text style={{ color: "black" }}>اتصل على جاهز</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 10,
  },
  callButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: 300,
    borderColor: "lightgray",
    borderWidth: 1,
  },
});

export default CallUsScreen;
