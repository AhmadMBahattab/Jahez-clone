import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  RefreshControl,
} from "react-native";
import { FAB } from "react-native-elements";
import {
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Cart from "../../components/reusable/cart";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const singleMenuItemScreen = ({ route }) => {
  const navigation = useNavigation();
  const [singleMenuItem, setsingleMenuItem] = useState({
    ...route.params,
  });
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
  const addItemToMyCart = (item) => {
    let myCart = [...route.params.myCart];
    myCart.push(item);
    route.params.setmyCart(myCart);
  };

  return (
    <>
      <ImageBackground
        source={singleMenuItem.image}
        imageStyle={{ opacity: 1 }}
        style={{
          width: "100%",
          height: windowHeight / 4,
        }}
      >
        <View style={styles.headerContainer}>
          <View style={styles.singleHeaderItem}>
            <Text></Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("القائمة", { ...singleMenuItem })
              }
            >
              <View style={{ padding: 2, borderRadius: 20 }}>
                <MaterialCommunityIcons
                  name="arrow-right"
                  size={24}
                  color={"white"}
                />
              </View>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, color: "white" }}>
              {singleMenuItem.name}
            </Text>
          </View>

          <View style={styles.singleHeaderItem}>
            {/* <TouchableOpacity>
              <MaterialCommunityIcons name="cart" color={"white"} size={22} />
            </TouchableOpacity> */}
            <Cart myCart={route.params.myCart} />
          </View>
        </View>
      </ImageBackground>

      <View style={styles.container}>
        {/* <View style={styles.imageContainer}>
          <Image
            source={singleMenuItem.image}
            style={{
              width: "100%",
              height: windowHeight / 3,
              resizeMode: "contain",
            }}
          />
        </View> */}
        <View style={styles.itemName}>
          <View>
            <FontAwesome name="dot-circle-o" size={24} color="orange" />
          </View>
          <Text style={{ marginLeft: 20 }}>{singleMenuItem.name}</Text>
        </View>
        <View style={styles.kindContainer}></View>

        <View style={styles.addContainer}>
          <View style={styles.addButton}>
            <View style={styles.singleInfo}>
              <TouchableOpacity onPress={decreeseItems}>
                <View
                  style={[styles.singleButton, { backgroundColor: "#FFC107" }]}
                >
                  <AntDesign name="minus" size={20} color="red" />
                </View>
              </TouchableOpacity>

              <Text style={{ fontSize: 20 }}>{numOfSingleMenuItem}</Text>

              <TouchableOpacity onPress={increeseItems}>
                <View style={[styles.singleButton, { backgroundColor: "red" }]}>
                  <AntDesign name="plus" size={20} color="orange" />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ width: "20%" }}>
              <Text style={{ color: "gray" }}>
                {singleMenuItem.price * numOfSingleMenuItem} SAR
              </Text>
            </View>

            <View style={[styles.singleInfo, { width: "40%" }]}>
              <Text style={{ marginRight: 10, color: "orange", fontSize: 16 }}>
                أضف الى السلة
              </Text>
              <TouchableOpacity
                onPress={() =>
                  addItemToMyCart({
                    image: singleMenuItem.image,
                    name: singleMenuItem.name,
                    price: singleMenuItem.price,
                    numberOfThisItem: numOfSingleMenuItem,
                  })
                }
              >
                <View style={[styles.singleButton, { backgroundColor: "red" }]}>
                  <FontAwesome name="check" size={20} color="orange" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    backgroundColor: "white",
  },
  itemName: {
    marginTop: 10,
    backgroundColor: "white",
    padding: 20,
    flexDirection: "row",
  },
  addContainer: {
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
  headerContainer: {
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
    height: windowHeight / 4,
  },
  singleHeaderItem: {
    flexDirection: "row",
    marginTop: 15,
  },
});
export default singleMenuItemScreen;
