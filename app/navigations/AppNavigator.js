import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";
import MainNavigator from "./MainNavigator";

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Main navigator" component={MainNavigator} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
