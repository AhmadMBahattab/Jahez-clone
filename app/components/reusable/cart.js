import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { Avatar, Badge, Icon, withBadge } from "react-native-elements";

const Cart = () => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("السلة")}>
        <View style={styles.cartContainer}>
          <View>
            <MaterialCommunityIcons name="cart" color={"white"} size={25} />
          </View>
          <Badge
            value={0}
            containerStyle={{ position: "absolute", bottom: 20, right: 20 }}
            status="warning"
          />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    padding: 5,
  },
});
export default Cart;
