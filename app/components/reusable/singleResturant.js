import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SingleResturant = ({ item }) => {
  const [liked, setliked] = useState(false);
  const rightAction = () => {
    return (
      <View style={styles.favoritButton}>
        <TouchableOpacity>
          <AntDesign
            name="hearto"
            color="red"
            size={30}
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={rightAction}>
      <TouchableOpacity>
        <View style={styles.singeResturantContainer}>
          <View style={styles.image}>
            <Image
              source={item.image}
              style={{ width: windowWidth / 5, height: windowWidth / 5 }}
            />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.singleInfoLayout}>
              <Text style={{ fontSize: 20 }}>
                {item.nameEN} - {item.nameArb}
              </Text>

              <Text style={{ fontSize: 14, color: "gray" }}>6.0 Kms</Text>
            </View>
            <View style={styles.singleInfoLayout}>
              <Text style={{ fontSize: 14, color: "green" }}>مفتوح</Text>
              <Text style={{ fontSize: 14, color: "gray" }}>
                {item.avalibaleTime.open} -{item.avalibaleTime.close}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  container: {},
  singeResturantContainer: {
    padding: 15,
    backgroundColor: "white",

    flexDirection: "row",
    borderBottomColor: "#D6D6D6",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  favoritButton: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#D6D6D6",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
  image: {
    padding: 1,
    borderColor: "red",
    borderWidth: 0.8,
    borderStyle: "solid",
    borderRadius: 20,
  },
  infoContainer: {
    justifyContent: "space-between",
  },
  singleInfoLayout: {
    padding: 5,
    width: (windowWidth / 5) * 3.7,

    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default SingleResturant;
