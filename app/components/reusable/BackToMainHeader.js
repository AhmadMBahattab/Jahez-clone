import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const BackToMainHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.singleHeaderItem}>
        <Text></Text>
        <TouchableOpacity onPress={() => navigation.navigate("Main")}>
          <View style={{ padding: 2, borderRadius: 20 }}>
            <MaterialCommunityIcons
              name="arrow-right"
              size={22}
              color={"white"}
            />
          </View>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: "white" }}>{title}</Text>
      </View>

      <View style={styles.singleHeaderItem}></View>

      <View style={styles.singleHeaderItem}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "red",
    height: StatusBar.currentHeight * 1.5,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  singleHeaderItem: {
    width: windowWidth / 3.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default BackToMainHeader;
