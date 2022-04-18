import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as Location from "expo-location";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MyCartScreen = ({ route }) => {
  const [location, setLocation] = useState(null);
  const [myFinalCart, setmyFinalCart] = useState([...route.params.myCart]);
  const [numOfSingleMenuItem, setnumOfSingleMenuItem] = useState(1);

  console.log(route.params);

  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorMsg("Permission to access location was denied");
  //       return;
  //     }

  //     setlocationEnabeled(true);
  //     let location = await Location.getCurrentPositionAsync({});

  //     setLocation(location);
  //   })();
  // }, []);
  const increeseItems = () => {
    if (numOfSingleMenuItem < 30) {
      setnumOfSingleMenuItem(numOfSingleMenuItem + 1);
      return;
    }
    return;
  };
  const decreeseItems = () => {
    if (numOfSingleMenuItem > 1) {
      setnumOfSingleMenuItem(numOfSingleMenuItem - 1);
      return;
    }
    return;
  };
  return (
    <>
      <View style={styles.container}>
        {myFinalCart.length == 0 ? (
          <View style={styles.emptyCartContainer}>
            <Text style={{ fontSize: 18, color: "gray" }}>
              سلتك فارغة! قم باختيار طعامك الشهي من قائمة الطلبات
            </Text>
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={styles.headerContainer}>
              <View>
                <Text style={{ fontSize: 17 }}>
                  {myFinalCart[0].resturantName.nameEN} -{" "}
                  {myFinalCart[0].resturantName.nameArb}
                </Text>
              </View>

              <Text style={{ color: "red" }}>Mohammadiyah</Text>
            </View>
            <View style={styles.itemsContainer}>
              {myFinalCart.map((item) => (
                <View style={styles.item}>
                  <View style={styles.itemInfo}>
                    <View style={{ width: "40%" }}>
                      <Text>{item.name}</Text>
                    </View>

                    <Text>SAR {item.price}</Text>
                  </View>
                  <View style={styles.itemNumber}>
                    <View></View>
                    <View style={{ paddingRight: 5 }}>
                      <View style={styles.increeseAndDecreeseBtn}>
                        <TouchableOpacity onPress={decreeseItems}>
                          <View
                            style={[
                              styles.singleButton,
                              { backgroundColor: "#FFC107" },
                            ]}
                          >
                            <AntDesign name="minus" size={18} color="red" />
                          </View>
                        </TouchableOpacity>

                        <Text style={{ fontSize: 20 }}>
                          {numOfSingleMenuItem}
                        </Text>

                        <TouchableOpacity onPress={increeseItems}>
                          <View
                            style={[
                              styles.singleButton,
                              { backgroundColor: "red" },
                            ]}
                          >
                            <AntDesign name="plus" size={18} color="orange" />
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              ))}
            </View>
            <View style={styles.moveOnContainer}>
              <View style={styles.notesInput}>
                <Text>tttt</Text>
              </View>
              <TouchableOpacity>
                <View style={styles.moveOnButton}>
                  <Text>استمرار</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: windowWidth / 1.1,
  },
  headerContainer: {
    padding: 15,
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },

  itemsContainer: {
    padding: 20,
  },
  itemInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
  },
  itemNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
  },
  increeseAndDecreeseBtn: {
    flexDirection: "row",
    width: windowWidth / 4,
    justifyContent: "space-between",
    alignItems: "center",
  },
  singleButton: {
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 25,
  },
  moveOnContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  notesInput: {
    borderTopWidth: 1,
    borderTopColor: "lightgray",
  },
  moveOnButton: {
    padding: 20,
  },
});

export default MyCartScreen;
