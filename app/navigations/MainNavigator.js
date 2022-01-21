import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import ResturantsData from "../data/ResturantsData";
import SingleResturantScreen from "../screens/SingleResturantScreen";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const MainNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" options={{ headerShown: false }}>
        {() => <MainScreen resturantsArray={ResturantsData.getResturants()} />}
      </Stack.Screen>
      <Stack.Screen
        name="القائمة"
        options={{
          header: (props) => (
            <View style={styles.headerContainer}>
              <View style={styles.singleHeaderItem}>
                <Text></Text>
                <TouchableOpacity onPress={() => navigation.navigate("Main")}>
                  <MaterialCommunityIcons
                    name="arrow-right"
                    size={22}
                    color={"white"}
                  />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: "white" }}>القائمة</Text>
              </View>

              <View style={styles.singleHeaderItem}></View>

              <View style={styles.singleHeaderItem}>
                <TouchableOpacity>
                  <FontAwesome name="search" color={"white"} size={22} />
                </TouchableOpacity>

                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="cart"
                    color={"white"}
                    size={22}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MaterialIcons name="more-vert" color={"white"} size={22} />
                </TouchableOpacity>
              </View>
            </View>
          ),
        }}
        component={SingleResturantScreen}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "red",
    height: StatusBar.currentHeight * 2.5,
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "row",
  },
  singleHeaderItem: {
    marginTop: StatusBar.currentHeight * 1.5,
    width: windowWidth / 3.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default MainNavigator;
