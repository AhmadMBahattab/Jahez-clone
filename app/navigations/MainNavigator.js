import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import ResturantsData from "../data/ResturantsData";
import SingleResturantScreen from "../screens/singleResturant/SingleResturantScreen";

import ResturantHeader from "../components/navigator/resturantHeader";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import { useNavigation } from "@react-navigation/native";
import WalletScreen from "../screens/WalletScreen";
import SingleMenuItemScreen from "../screens/singleResturant/singleMenuItemScreen";
import MyCartScreen from "../screens/myCart/MyCartScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  // const [myCart, setmyCart] = useState([1, 2]);
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" options={{ headerShown: false }}>
        {() => <MainScreen resturantsArray={ResturantsData.getResturants()} />}
      </Stack.Screen>
      <Stack.Screen
        name="القائمة"
        options={{
          // header: (props) => <ResturantHeader />,
          headerShown: false,
        }}
        component={SingleResturantScreen}
      >
        {/* {() => <SingleResturantScreen myCart={myCart} />} */}
      </Stack.Screen>
      <Stack.Screen
        name="الصنف"
        options={{
          // header: (props) => <ResturantHeader />,
          headerShown: false,
        }}
        component={SingleMenuItemScreen}
      >
        {/* {() => <singleMenuItemScreen myCart={myCart} />} */}
      </Stack.Screen>
      <Stack.Screen
        name="سلتي"
        options={{
          // header: (props) => <ResturantHeader />,\
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "#fff",
          headerShown: true,
        }}
        component={MyCartScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({});

export default MainNavigator;
