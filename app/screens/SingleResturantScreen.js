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
import SingleResturant from "../components/reusable/singleResturant";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleResturantScreen = ({ resturant }) => {
  const [singleResturant, setsingleResturant] = useState(resturant[0]);
  const [arrayOfMenuItems, setarrayOfMenuItems] = useState(null);

  function preperMenu(object) {
    let arrayOfObjects = [];

    for (let i in object) {
      arrayOfObjects.push(object[i]);
    }
    setarrayOfMenuItems(arrayOfObjects);
  }

  useEffect(() => {
    preperMenu(singleResturant.menue);
  }, []);

  console.log("space");

  return (
    <View style={styles.container}>
      <ScrollView style={styles.menuContainer}>
        <SingleResturant item={singleResturant} />

        {arrayOfMenuItems &&
          arrayOfMenuItems.map((menu) => (
            <>
              {menu.map((item, index) => (
                <View style={styles.singleMenuItem} key={index}>
                  <View style={styles.image}>
                    <Image
                      source={item.image}
                      style={{ width: windowWidth, height: windowHeight / 5 }}
                    />
                  </View>
                  <View style={styles.info}>
                    <Text>{item.name}</Text>
                    <Text>{item.price} SAR</Text>
                  </View>
                </View>
              ))}
            </>
          ))}
      </ScrollView>

      <View style={styles.menuNavBarContainer}>
        <ScrollView style={styles.menuNavBarScroll} horizontal={true}>
          <TouchableOpacity>
            <Text style={styles.singleNavBarItem}>القائمة كاملة</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.singleNavBarItem}>الوجبات الرئيسية</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.singleNavBarItem}>الطلبات الجانبية</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.singleNavBarItem}>الحلويات</Text>
          </TouchableOpacity>
          <TouchableOpacity>
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
