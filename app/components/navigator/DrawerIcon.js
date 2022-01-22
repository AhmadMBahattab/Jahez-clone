import { View, Text } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const DrawerIcon = () => {
  return (
    <View
      style={{
        borderRadius: 10,
        borderColor: "red",
        borderWidth: 1,
        borderStyle: "solid",
      }}
    >
      <MaterialIcons name="payment" size={20} color={"red"} />
    </View>
  );
};

export default DrawerIcon;
