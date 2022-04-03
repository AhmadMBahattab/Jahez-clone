import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { Input, Icon, Overlay } from "react-native-elements";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  FontAwesome,
  AntDesign,
  MaterialIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const jahezTitle = require("../../photos/jahez-title.jpg");

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const NavBar = ({
  openMap,
  openSearch,
  toogleOpenSearch,
  searchResturant,
  setsearchResturant,
  filterType,
  setfilterType,
  setFilterResturantsType,
  applyFilterResturantsType,
}) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const clearInput = () => {
    setsearchResturant("");
  };
  const toggleOverlay = () => {
    setVisible(!visible);
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
            <TouchableOpacity onPress={toggleOverlay}>
              <FontAwesome name="sort" color={"white"} size={22} />
            </TouchableOpacity>
          </View>

          <Overlay isVisible={visible}>
            <View
              style={{
                padding: 10,
                width: windowWidth / 1.3,
              }}
            >
              <View style={styles.foodTypeButtons}>
                <View style={styles.singleFoodTypeContainer}>
                  <TouchableOpacity
                    onPress={() => setFilterResturantsType("all")}
                  >
                    <View style={styles.singleFoodType}>
                      <Feather
                        name="check"
                        size={35}
                        color={filterType == "all" ? "red" : "gray"}
                      />
                    </View>
                  </TouchableOpacity>
                  <Text>All</Text>
                </View>

                <TouchableOpacity
                  onPress={() => setFilterResturantsType("fastFood")}
                >
                  <View style={styles.singleFoodTypeContainer}>
                    <View style={styles.singleFoodType}>
                      <MaterialCommunityIcons
                        name="hamburger"
                        size={35}
                        color={filterType == "fastFood" ? "red" : "gray"}
                      />
                    </View>
                    <Text>Fast food</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setFilterResturantsType("healthyFood")}
                >
                  <View style={styles.singleFoodTypeContainer}>
                    <View style={styles.singleFoodType}>
                      <MaterialCommunityIcons
                        name="food-apple"
                        size={35}
                        color={filterType == "healthyFood" ? "red" : "gray"}
                      />
                    </View>
                    <Text>Healthy</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={styles.applayFilterButton}>
                <MaterialCommunityIcons
                  name="check-bold"
                  size={30}
                  color="red"
                  onPress={() => {
                    applyFilterResturantsType();
                    toggleOverlay();
                  }}
                />
              </View>
            </View>
          </Overlay>
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
    marginTop: 12,
    width: windowWidth - windowWidth / 9,
    height: windowHeight / 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  foodTypeButtons: {
    margin: 5,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  singleFoodTypeContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  singleFoodType: {
    margin: 5,
    padding: 5,
    borderRadius: 20,
    borderColor: "gray",
    borderWidth: 1,
  },

  applayFilterButton: {
    marginTop: 10,
    paddingTop: 10,
    alignItems: "center",
    borderColor: "lightgray",
    borderTopWidth: 1,
  },
});
export default NavBar;
