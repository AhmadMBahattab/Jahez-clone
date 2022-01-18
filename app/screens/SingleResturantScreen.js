import React, { useState } from "react";
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

  return (
    <View style={styles.container}>
      <ScrollView style={styles.menuContainer}>
        <SingleResturant item={singleResturant} />
        <View style={styles.singleMenuItem}>
          <View style={styles.image}>
            <Image
              source={singleResturant.menue.mainDish[1].mealImage}
              style={{ width: windowWidth, height: windowHeight / 5 }}
            />
          </View>
          <View style={styles.info}>
            <Text>{singleResturant.menue.mainDish[1].mealName}</Text>
            <Text>{singleResturant.menue.mainDish[1].mealPrice} SAR</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  menuContainer: {
    marginTop: 10,
    backgroundColor: "gray",
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
});

export default SingleResturantScreen;
