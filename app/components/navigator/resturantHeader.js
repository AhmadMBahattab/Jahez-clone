import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { Input, Icon, Overlay } from "react-native-elements";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../../screens/MainScreen";
import ResturantsData from "../../data/ResturantsData";
import SingleResturantScreen from "../../screens/singleResturant/SingleResturantScreen";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import { useNavigation } from "@react-navigation/native";
import Cart from "../reusable/cart";

const Stack = createStackNavigator();

const ResturantHeader = ({
  toogleOpenSearch,
  searchResturant,
  setsearchResturant,
  openSearch,
  myCart,
}) => {
  const navigation = useNavigation();

  const clearInput = () => {
    setsearchResturant("");
  };
  return (
    <View style={styles.headerContainer}>
      {!openSearch ? (
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
      ) : (
        <View style={styles.searchContainer}>
          <View style={{ width: windowWidth / 1.3 }}>
            <Input
              autoFocus
              style={{ color: "white", marginLeft: 10 }}
              maxLength={15}
              value={searchResturant}
              textAlign="right"
              placeholder="بحث..."
              placeholderTextColor="lightgray"
              underlineColorAndroid="rgba(0,0,0,0)"
              selectionColor="orange"
              inputContainerStyle={{ borderColor: "rgba(0,0,0,0)" }}
              leftIcon={
                <TouchableOpacity
                  onPress={() => {
                    toogleOpenSearch();
                    clearInput();
                  }}
                >
                  <View style={{ padding: 10 }}>
                    <AntDesign name="arrowright" size={24} color="white" />
                  </View>
                </TouchableOpacity>
              }
              rightIcon={
                searchResturant.length <= 0 ? (
                  <View></View>
                ) : (
                  <TouchableOpacity onPress={clearInput}>
                    <View style={{ padding: 10 }}>
                      <MaterialIcons name="clear" size={24} color="black" />
                    </View>
                  </TouchableOpacity>
                )
              }
              onChangeText={(value) => {
                setsearchResturant(value);
              }}
            />
          </View>

          <Cart />
          <TouchableOpacity>
            <MaterialIcons name="more-vert" color={"white"} size={22} />
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.singleHeaderItem}></View>

      <View style={styles.singleHeaderItem}>
        {!openSearch ? (
          <TouchableOpacity onPress={toogleOpenSearch}>
            <FontAwesome name="search" color={"white"} size={22} />
          </TouchableOpacity>
        ) : (
          <View></View>
        )}

        <Cart myCart={myCart} />
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
    padding: 10,
    paddingLeft: 10,
    paddingRight: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  singleHeaderItem: {
    width: windowWidth / 3.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchContainer: {
    height: windowHeight / 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default ResturantHeader;
