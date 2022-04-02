import React, { useState, useEffect } from "react";
import NavBar from "../components/main/NavBar";
import ResturantsLocations from "../components/main/ResturantsLocations";
import SingleResturant from "../components/reusable/singleResturant";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import * as Location from "expo-location";

const MainScreen = ({ resturantsArray }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationEnabeled, setlocationEnabeled] = useState(false);
  const [openSearch, setopenSearch] = useState(false);
  const [visible, setVisible] = useState(false);
  const [searchResturant, setsearchResturant] = useState("");

  const [allResturantsArray, setallResturantsArray] = useState([
    ...resturantsArray,
  ]);

  const [filterdResturants, setfilterdResturants] = useState([]);
  const [filterType, setfilterType] = useState("all");

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

  const toogleOpenSearch = () => {
    setopenSearch(!openSearch);
  };
  const setFilterResturantsType = (type) => {
    console.log(type);
    setfilterType(type);
  };

  let filteResturants = allResturantsArray.filter((resturant) =>
    resturant.nameArb.toLowerCase().includes(searchResturant.toLowerCase())
  );
  return (
    <>
      <NavBar
        openMap={toggleOverlay}
        toogleOpenSearch={toogleOpenSearch}
        openSearch={openSearch}
        searchResturant={searchResturant}
        setsearchResturant={setsearchResturant}
      />
      <ResturantsLocations
        resturantsArray={allResturantsArray}
        visible={visible}
        closeMap={toggleOverlay}
      />
      <ScrollView>
        {filteResturants.map((item) => (
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
