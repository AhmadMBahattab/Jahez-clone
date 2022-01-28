import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import SingleResturant from "../../components/reusable/singleResturant";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleResturantScreen = ({ route }) => {
  const navigation = useNavigation();
  const [singleResturant, setsingleResturant] = useState({ ...route.params });
  const [isFullMenu, setisFullMenu] = useState(false);
  const [isSingleMenu, setisSingleMenu] = useState(false);

  const [arrayOfMenuItems, setarrayOfMenuItems] = useState(null);
  const [arrayOfTypeOfMenu, setarrayOfTypeOfMenu] = useState(null);

  function preperMenu(object) {
    let arrayOfObjects = [];

    for (let i in object) {
      arrayOfObjects.push(object[i]);
    }
    setarrayOfMenuItems(arrayOfObjects);
    setisFullMenu(true);
  }

  useEffect(() => {
    preperMenu(singleResturant.menue);
  }, []);

  const sortToFullMenu = () => {
    setisFullMenu(true);
    setisSingleMenu(false);
  };
  const sortToMainDishs = () => {
    let mainMenu = [...singleResturant.menue.mainDish];
    setarrayOfTypeOfMenu([...mainMenu]);
    setisFullMenu(false);
    setisSingleMenu(true);
    console.log("hooola", arrayOfTypeOfMenu);
  };
  const sortToSideDishs = () => {
    let sideMenu = [...singleResturant.menue.sideDish];
    setarrayOfTypeOfMenu([...sideMenu]);
    setisFullMenu(false);
    setisSingleMenu(true);
  };
  const sortToDesserts = () => {
    let desserts = [...singleResturant.menue.desserts];
    setarrayOfTypeOfMenu([...desserts]);
    setisFullMenu(false);
    setisSingleMenu(true);
  };
  const sortToDrinks = () => {
    let drinks = [...singleResturant.menue.drinks];
    setarrayOfTypeOfMenu([...drinks]);
    setisFullMenu(false);
    setisSingleMenu(true);
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.menuContainer}>
        <SingleResturant item={singleResturant} />

        {arrayOfMenuItems && isFullMenu ? (
          arrayOfMenuItems.map((menu) => (
            <>
              {menu.map((item, index) => (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("الصنف", {
                        ...item,
                      })
                    }
                  >
                    <View style={styles.singleMenuItem} key={index}>
                      <View style={styles.image}>
                        <Image
                          source={item.image}
                          style={{
                            width: windowWidth,
                            height: windowHeight / 4,
                          }}
                        />
                      </View>
                      <View style={styles.info}>
                        <Text>{item.name}</Text>
                        <Text>{item.price} SAR</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              ))}
            </>
          ))
        ) : (
          <View
            style={{ justifyContent: "center", alignItems: "center" }}
          ></View>
        )}

        {isSingleMenu &&
          arrayOfTypeOfMenu.map((item, index) => (
            <>
              <View style={styles.singleMenuItem} key={index}>
                <View style={styles.image}>
                  <Image
                    source={item.image}
                    style={{ width: windowWidth, height: windowHeight / 4 }}
                  />
                </View>
                <View style={styles.info}>
                  <Text>{item.name}</Text>
                  <Text>{item.price} SAR</Text>
                </View>
              </View>
            </>
          ))}
      </ScrollView>

      <View style={styles.menuNavBarContainer}>
        <ScrollView style={styles.menuNavBarScroll} horizontal={true}>
          <TouchableOpacity onPress={sortToFullMenu}>
            <Text style={styles.singleNavBarItem}>القائمة كاملة</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={sortToMainDishs}>
            <Text style={styles.singleNavBarItem}>الوجبات الرئيسية</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={sortToSideDishs}>
            <Text style={styles.singleNavBarItem}>الطلبات الجانبية</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={sortToDesserts}>
            <Text style={styles.singleNavBarItem}>الحلويات</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={sortToDrinks}>
            <Text style={styles.singleNavBarItem}>المشروبات</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  menuContainer: {
    marginTop: 10,
    backgroundColor: "lightgray",
  },
  singleMenuItem: {
    marginTop: 5,
  },
  info: {
    padding: 5,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuNavBarContainer: {
    padding: 10,
    backgroundColor: "red",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  menuNavBarScroll: {},
  singleNavBarItem: {
    marginHorizontal: 12,
    color: "white",
    fontSize: 18,
  },
});

export default SingleResturantScreen;
