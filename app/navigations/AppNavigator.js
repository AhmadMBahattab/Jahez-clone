import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import MainScreen from "../screens/MainScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainNavigator from "./MainNavigator";
import WalletScreen from "../screens/WalletScreen";
import OrderScreen from "../screens/OrdersScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import AboutJahezScreen from "../screens/AboutJahezScreen";
import CallUsScreen from "../screens/CallUsScreen";
import CustomDrawer from "../components/navigator/CustomDrawer";
import PolicyScreen from "../screens/PolicyScreen";
import SupportScreen from "../screens/SupportScreen";

import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  Foundation,
} from "@expo/vector-icons";
import AccountScreen from "../screens/AccountScreen";

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="الرئيسية"
        component={MainNavigator}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <View style={styles.iconStyleContainer}>
              <MaterialIcons name="home" size={20} color={"red"} />
            </View>
          ),
          drawerLabelStyle: { color: "red" },
        }}
      />
      <Drawer.Screen
        name="المحفظة"
        component={WalletScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <View style={styles.iconStyleContainer}>
              <MaterialIcons name="payment" size={20} color={"red"} />
            </View>
          ),
          drawerLabelStyle: { color: "red" },
        }}
      />
      <Drawer.Screen
        name="طلباتي"
        component={OrderScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <View style={styles.iconStyleContainer}>
              <MaterialCommunityIcons
                name="newspaper"
                size={20}
                color={"red"}
              />
            </View>
          ),
          drawerLabelStyle: { color: "red" },
        }}
      />
      <Drawer.Screen
        name="الاشعارات"
        component={NotificationsScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <View style={styles.iconStyleContainer}>
              <MaterialIcons
                name="notifications-active"
                size={20}
                color={"red"}
              />
            </View>
          ),

          drawerLabelStyle: { color: "red" },
        }}
      />
      <Drawer.Screen
        name="عن جاهز"
        component={AboutJahezScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <FontAwesome5 name="dot-circle" size={24} color={"red"} />
          ),
          drawerLabelStyle: { color: "red" },
        }}
      />
      <Drawer.Screen
        name="اتصل بنا"
        component={CallUsScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <View style={styles.iconStyleContainer}>
              <Foundation name="telephone" size={20} color={"red"} />
            </View>
          ),
          drawerLabelStyle: { color: "red" },
        }}
      />
      <Drawer.Screen
        name="سياستنا"
        component={PolicyScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <View style={styles.iconStyleContainer}>
              <Ionicons name="shield-outline" size={20} color={"red"} />
            </View>
          ),
          drawerLabelStyle: { color: "red" },
        }}
      />
      <Drawer.Screen
        name="الدعم"
        component={SupportScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <View style={styles.iconStyleContainer}>
              <MaterialIcons name="message" size={20} color={"red"} />
            </View>
          ),
          drawerLabelStyle: { color: "red" },
        }}
      />
      <Drawer.Screen
        name="حسابي"
        component={AccountScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <View style={styles.iconStyleContainer}>
              <MaterialCommunityIcons name="account" size={20} color={"red"} />
            </View>
          ),
          drawerLabelStyle: { color: "red" },
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  iconStyleContainer: {
    padding: 2,
    borderRadius: 40,
    borderColor: "red",
    borderWidth: 1,
    borderStyle: "solid",
  },
});

export default AppNavigator;
