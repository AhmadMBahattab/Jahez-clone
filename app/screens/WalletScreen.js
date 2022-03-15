import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import BackToMainHeader from "../components/reusable/BackToMainHeader";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const mdaImage = require("../photos/Mada_Logo.png");

const WalletScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <BackToMainHeader title={"المحفظة"} />
      <View style={styles.container}>
        <View style={styles.singleCardInfo}>
          <View>
            <Text style={{ color: "gray" }}>رقم البطاقة</Text>
            <Text style={styles.cardInfoColors}>**** **** **** 2988 </Text>
          </View>
          <View>
            <Image
              source={mdaImage}
              style={{ width: 80, height: 20, resizeMode: "contain" }}
            />
          </View>
        </View>
        <View style={[styles.singleCardInfo, { marginTop: windowHeight / 35 }]}>
          <View>
            <Text style={{ color: "gray" }}>اسم صاحب البطاقة</Text>
            <Text style={styles.cardInfoColors}>AHEMD BAHATTAB</Text>
          </View>
          <View>
            <Text style={{ color: "gray" }}>تاريخ الانتهاء</Text>
            <Text style={styles.cardInfoColors}>11/23</Text>
          </View>
        </View>
      </View>
      <View style={styles.addCardContainer}>
        <TouchableOpacity>
          <View style={styles.addCardButton}>
            <Text style={{ color: "white", fontSize: 20 }}>
              اضافة بطاقة جديدة
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 15,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "lightgray",
    borderStyle: "solid",
    borderWidth: 1,
  },
  singleCardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardInfoColors: {
    color: "gray",
    fontSize: 18,
  },
  addCardContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
  addCardButton: {
    margin: 20,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
});

export default WalletScreen;
