import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import ResturantsData from "../data/ResturantsData";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" options={{ headerShown: false }}>
        {() => <MainScreen resturantsArray={ResturantsData.getResturants()} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainNavigator;
