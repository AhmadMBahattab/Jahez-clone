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
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import SingleResturant from "../components/reusable/singleResturant";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MainScreen = ({ resturantsArray }) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.navBarContainer}>
        <View style={styles.singleNavBarItem}>
          <Text>Buu</Text>
          <Text>buut</Text>
        </View>
        <View style={styles.singleNavBarItem}>
          <Text>Jahez</Text>
        </View>
        <View style={styles.singleNavBarItem}>
          <Text>Location</Text>
          <Text>menu</Text>
        </View>
      </View>
      <ScrollView>
        {resturantsArray.map((item) => (
          <View key={item.id}>
            <SingleResturant item={item} />
          </View>
        ))}
        <Button
          title="test"
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  navBarContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "red",
    height: StatusBar.currentHeight * 2,
  },
  singleNavBarItem: {
    marginTop: StatusBar.currentHeight,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "orange",
  },
});

export default MainScreen;
