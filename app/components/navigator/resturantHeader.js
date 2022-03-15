import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../../screens/MainScreen";
import ResturantsData from "../../data/ResturantsData";
import SingleResturantScreen from "../../screens/singleResturant/SingleResturantScreen";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import { useNavigation } from "@react-navigation/native";
import Cart from "../reusable/cart";

const Stack = createStackNavigator();

const ResturantHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.singleHeaderItem}>
        <Text></Text>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <View style={{ padding: 2, borderRadius: 20 }}>
            <MaterialCommunityIcons
              name="arrow-right"
              size={22}
              color={"white"}
            />
          </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: "white" }}>القائمة</Text>
      </View>

      <View style={styles.singleHeaderItem}></View>

      <View style={styles.singleHeaderItem}>
        <TouchableOpacity>
          <FontAwesome name="search" color={"white"} size={22} />
        </TouchableOpacity>
        <Cart />
        <TouchableOpacity>
          <MaterialIcons name="more-vert" color={"white"} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "red",
    height: StatusBar.currentHeight * 2,
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
  },
  singleHeaderItem: {
    width: windowWidth / 3.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default ResturantHeader;
