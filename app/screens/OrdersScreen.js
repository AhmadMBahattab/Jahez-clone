import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import BackToMainHeader from "../components/reusable/BackToMainHeader";
import { AntDesign } from "@expo/vector-icons";

const OrderScreen = () => {
  return (
    <>
      <BackToMainHeader title={"طلباتي"} />
      <ScrollView>
        <TouchableOpacity>
          <View style={styles.container}>
            <View>
              <Text style={styles.orderInfo}>هرفي - Herfy</Text>
              <Text style={styles.orderInfo}>الطلب - #995434</Text>
              <Text style={{ color: "gray" }}>04-02-2022 10:10 PM</Text>
            </View>
            <Text></Text>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "red", margin: 10 }}>تم التوصيل</Text>
                <AntDesign name="left" size={6} color="black" />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  orderInfo: {
    color: "gray",
    fontSize: 17,
    margin: 3,
  },
});

export default OrderScreen;
