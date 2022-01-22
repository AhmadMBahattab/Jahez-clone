import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";
import MainNavigator from "./MainNavigator";
import WalletScreen from "../screens/WalletScreen";
import OrderScreen from "../screens/OrdersScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import AboutJahezScreen from "../screens/AboutJahezScreen";
import CallUsScreen from "../screens/CallUsScreen";

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="الرئيسية"
        component={MainNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="المحفظة"
        component={WalletScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="طلباتي"
        component={OrderScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="الاشعارات"
        component={NotificationsScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="عن جاهز"
        component={AboutJahezScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="اتصل بنا"
        component={CallUsScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
