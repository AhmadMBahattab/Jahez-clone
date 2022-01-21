import React, { useState, useEffect } from "react";
import NavBar from "../components/main/NavBar";
import SingleResturant from "../components/reusable/singleResturant";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import { Button, Overlay, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

import MapView, { Marker, Callout } from "react-native-maps";
import ResturantsLocations from "../components/main/ResturantsLocations";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MainScreen = ({ resturantsArray }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationEnabeled, setlocationEnabeled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      setlocationEnabeled(true);
      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
    })();
  }, []);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <>
      <NavBar openMap={toggleOverlay} />
      <ResturantsLocations
        resturantsArray={resturantsArray}
        visible={visible}
        closeMap={toggleOverlay}
      />
      <ScrollView>
        {resturantsArray.map((item) => (
          <View key={item.id}>
            <SingleResturant item={item} />
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default MainScreen;
