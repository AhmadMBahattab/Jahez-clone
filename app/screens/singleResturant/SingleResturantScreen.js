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
import ResturantHeader from "../../components/navigator/resturantHeader";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleResturantScreen = ({ route }) => {
  const navigation = useNavigation();
  const [singleResturant, setsingleResturant] = useState({
    ...route.params.item,
  });

  const [isFullMenu, setisFullMenu] = useState(false);
  const [isSingleMenu, setisSingleMenu] = useState(false);
  const [openSearch, setopenSearch] = useState(false);
  const [searchResturant, setsearchResturant] = useState("");

  const [fullMenuArray, setfullMenuArray] = useState([]);
  const [arrayOfMenuItems, setarrayOfMenuItems] = useState(null);
  const [arrayOfTypeOfMenu, setarrayOfTypeOfMenu] = useState(null);

  function preperMenu(object) {
    let arrayOfObjects = [];
    let fullMenuArray = [];

    for (let i in object) {
      arrayOfObjects.push(object[i]);
      object[i].map((item) => {
        fullMenuArray.push(item);
      });
    }

    setfullMenuArray(fullMenuArray);
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
  const toogleOpenSearch = () => {
    setopenSearch(!openSearch);
  };

  // console.log(122);

  let filtterMenu = [];
  if (arrayOfMenuItems && arrayOfMenuItems.length > 0) {
    filtterMenu = arrayOfMenuItems.filter((menu) => {
      return menu.map((item) => {
        item.name.toLowerCase().includes(searchResturant.toLowerCase());
      });
    });
  }

  return (
    <>
      {singleResturant ? (
        <>
          <ResturantHeader
            toogleOpenSearch={toogleOpenSearch}
            searchResturant={searchResturant}
            setsearchResturant={setsearchResturant}
            openSearch={openSearch}
            myCart={route.params.myCart}
          />
          <View style={styles.container}>
            <ScrollView style={styles.menuContainer}>
              <SingleResturant item={singleResturant} />

              {arrayOfMenuItems && arrayOfMenuItems.length > 0 && isFullMenu ? (
                filtterMenu.map((menu) => (
                  <>
                    {menu.map((item, index) => (
                      <>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate("الصنف", {
                              ...item,
                              myCart: route.params.myCart,
                              setmyCart: route.params.setmyCart,
                              resturantName: {
                                nameArb: singleResturant.nameArb,
                                nameEN: singleResturant.nameEN,
                              },
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
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("الصنف", {
                          ...item,
                          myCart: route.params.myCart,
                          setmyCart: route.params.setmyCart,
                          resturantName: {
                            nameArb: singleResturant.nameArb,
                            nameEN: singleResturant.nameEN,
                          },
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
        </>
      ) : null}
    </>
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
  searchContainer: {
    marginTop: 12,
    width: windowWidth - windowWidth / 9,
    height: windowHeight / 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
