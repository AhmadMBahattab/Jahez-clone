import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { FAB } from "react-native-elements";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const singleMenuItemScreen = ({ route }) => {
  const [singleMenuItem, setsingleMenuItem] = useState({ ...route.params });
  const [numOfSingleMenuItem, setnumOfSingleMenuItem] = useState(1);

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

  console.log(singleMenuItem);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={singleMenuItem.image}
          style={{
            width: "100%",
            height: windowHeight / 3,
            resizeMode: "contain",
          }}
        />
      </View>
      <View style={styles.kindContainer}></View>
      <View style={styles.addContainer}>
        <View style={styles.addButton}>
          <View style={styles.singleInfo}>
            <TouchableOpacity>
              <View style={[styles.singleButton, { backgroundColor: "red" }]}>
                <FontAwesome name="check" size={20} color="orange" />
              </View>
            </TouchableOpacity>
            <Text style={{ marginLeft: 10 }}>اضف الى السلة</Text>
          </View>
          <Text>{singleMenuItem.price}</Text>
          <View style={styles.singleInfo}>
            <TouchableOpacity onPress={increeseItems}>
              <View style={[styles.singleButton, { backgroundColor: "red" }]}>
                <AntDesign name="plus" size={20} color="orange" />
              </View>
            </TouchableOpacity>
            <Text style={{ fontSize: 20 }}>{numOfSingleMenuItem}</Text>
            <TouchableOpacity>
              <TouchableOpacity onPress={decreeseItems}>
                <View
                  style={[styles.singleButton, { backgroundColor: "#FFC107" }]}
                >
                  <AntDesign name="minus" size={20} color="red" />
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addContainer: {
    backgroundColor: "red",
    justifyContent: "flex-end",
    flex: 1,
  },
  addButton: {
    padding: 20,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  singleButton: {
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 25,
  },

  singleInfo: {
    flexDirection: "row",
    width: windowWidth / 4,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default singleMenuItemScreen;
