import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MyCartScreen = ({ route }) => {
  const [location, setLocation] = useState(null);
  const [myFinalCart, setmyFinalCart] = useState([...route.params.myCart]);

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
          <View>
            <View style={styles.headerContainer}>
              <View>
                <Text style={{ fontSize: 17 }}>
                  {myFinalCart[0].resturantName.nameEN} -{" "}
                  {myFinalCart[0].resturantName.nameArb}
                </Text>
              </View>

              <Text style={{ color: "red" }}>Mohammadiyah</Text>
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
});

export default MyCartScreen;
