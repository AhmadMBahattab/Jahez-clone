import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import BackToMainHeader from "../components/reusable/BackToMainHeader";
import DrawerIcon from "../components/navigator/DrawerIcon";
import { Ionicons } from "@expo/vector-icons";
const defaultImage = require("../photos/Default-welcomer.png");
const AccountScreen = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <BackToMainHeader title={"حسابي"} />
      <View style={styles.userInfoContainer}>
        <View style={styles.imageConatiner}>
          <Image
            source={defaultImage}
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: "lightgray",
              marginRight: 10,
            }}
          />
          <View style={styles.userInfo}>
            <Text>Ahmed</Text>
            <Text style={{ color: "gray" }}>966545800022</Text>
          </View>
        </View>
      </View>
      <View style={styles.walletInfoContainer}>
        <Text>اجمالي رصيد المحفظة </Text>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Text style={{ color: "gray", marginRight: 10 }}>SAR 0.00</Text>
            <View
              style={{
                borderRadius: 10,
                borderColor: "red",
                borderWidth: 1,
                borderStyle: "solid",
              }}
            >
              <Ionicons name="wallet-outline" size={20} color={"red"} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.editButton}>
          <Text style={{ color: "white" }}>تعديل</Text>
        </View>

        <View style={styles.logOutButton}>
          <Text style={{ color: "red" }}>تغيير كلمة المرور</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  userInfoContainer: {
    marginTop: 20,
    padding: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  imageConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "45%",
  },
  userInfo: {},
  walletInfoContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 20,
  },
  buttonsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "red",
    width: "80%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  logOutButton: {
    marginTop: 10,
    backgroundColor: "white",
    width: "80%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "lightgray",
  },
});

export default AccountScreen;
