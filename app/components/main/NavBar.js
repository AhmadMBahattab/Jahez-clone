import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Button,
  StatusBar,
} from "react-native";

import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
const jahezTitle = require("../../photos/jahez-title.jpg");

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const NavBar = ({ openMap }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.navBarContainer}>
      <View style={styles.singleNavBarItem}>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <MaterialCommunityIcons name="menu" color={"white"} size={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={openMap}>
          <SimpleLineIcons name="location-pin" color={"white"} size={20} />
        </TouchableOpacity>
        <Text></Text>
      </View>
      <View style={[styles.singleNavBarItem, { width: windowWidth / 4 }]}>
        <Text></Text>
        <Image
          source={jahezTitle}
          style={{ width: windowWidth / 4, height: 30 }}
        />
        <Text></Text>
      </View>
      <View style={styles.singleNavBarItem}>
        <Text></Text>
        <TouchableOpacity>
          <FontAwesome name="search" color={"white"} size={20} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="sort" color={"white"} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  navBarContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "red",
    height: StatusBar.currentHeight * 2.5,
  },
  singleNavBarItem: {
    marginTop: StatusBar.currentHeight * 1.5,
    width: windowWidth / 5,
    flexDirection: "row",
    justifyContent: "space-between",
    color: "white",
  },
});
export default NavBar;
