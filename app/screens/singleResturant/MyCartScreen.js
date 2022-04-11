import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MyCartScreen = ({ route }) => {
  console.log(route.params.myCart);
  const [myFinalCart, setmyFinalCart] = useState([...route.params.myCart]);
  return (
    <>
      <View style={styles.container}>
        {myFinalCart.length == 0 && (
          <View style={styles.emptyCartContainer}>
            <Text style={{ fontSize: 18, color: "gray" }}>
              سلتك فارغة! قم باختيار طعامك الشهي من قائمة الطلبات
            </Text>
          </View>
        )}
        {/* <Text>MyCartScreen</Text> */}
        {/* <Text>{route.params}</Text> */}
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
});

export default MyCartScreen;
