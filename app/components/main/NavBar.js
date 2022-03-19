import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Button,
  StatusBar,
} from "react-native";
import { Input, Icon } from "react-native-elements";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  FontAwesome,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
const jahezTitle = require("../../photos/jahez-title.jpg");

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const NavBar = ({
  openMap,
  openSearch,
  toogleOpenSearch,
  searchResturant,
  setsearchResturant,
}) => {
  const navigation = useNavigation();

  const clearInput = () => {
    setsearchResturant("");
  };

  return (
    <View style={styles.navBarContainer}>
      {!openSearch ? (
        <>
          <View style={styles.singleNavBarItem}>
            <TouchableOpacity
              onPress={() => {
                navigation.openDrawer();
              }}
            >
              <MaterialCommunityIcons name="menu" color={"white"} size={22} />
            </TouchableOpacity>
            <TouchableOpacity onPress={openMap}>
              <SimpleLineIcons name="location-pin" color={"white"} size={22} />
            </TouchableOpacity>
            <Text></Text>
          </View>
          <View style={[styles.singleNavBarItem, { width: windowWidth / 4 }]}>
            <Text></Text>
            <Image
              source={jahezTitle}
              style={{ width: windowWidth / 4, height: 30 }}
            />
            <Text></Text>
          </View>
          <View style={styles.singleNavBarItem}>
            <Text></Text>
            <TouchableOpacity onPress={toogleOpenSearch}>
              <FontAwesome name="search" color={"white"} size={22} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="sort" color={"white"} size={22} />
            </TouchableOpacity>
          </View>
        </>
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

          <TouchableOpacity>
            <FontAwesome name="sort" color={"white"} size={22} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  navBarContainer: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "red",
  },
  singleNavBarItem: {
    marginTop: 5,
    width: windowWidth / 5,
    flexDirection: "row",
    justifyContent: "space-between",
    color: "white",
  },
  searchContainer: {
    width: windowWidth - windowWidth / 9,
    height: windowHeight / 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default NavBar;
