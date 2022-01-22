import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.userContainer}>
          <Text>مرحبا Ahmad</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5,
            }}
          >
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
            <Text style={{ fontWeight: "bold", marginLeft: 10 }}>0.00 SAR</Text>
          </View>
        </View>
        <View style={styles.singleItem}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userContainer: {
    padding: 10,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
});

export default CustomDrawer;
