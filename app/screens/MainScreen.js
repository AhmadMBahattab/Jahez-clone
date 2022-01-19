import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Button,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import SingleResturant from "../components/reusable/singleResturant";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MainScreen = ({ resturantsArray }) => {
  return (
    <>
      <ScrollView>
        {resturantsArray.map((item) => (
          <View key={item.id}>
            <SingleResturant item={item} />
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default MainScreen;
