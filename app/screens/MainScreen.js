import React, { useState, useEffect } from "react";
import NavBar from "../components/main/NavBar";
import ResturantsLocations from "../components/main/ResturantsLocations";
import SingleResturant from "../components/reusable/singleResturant";
import { View, Text, StyleSheet, ScrollView, Keyboard } from "react-native";
import * as Location from "expo-location";

let EnglishLitters = /[a-zA-Z]/;

const MainScreen = ({ resturantsArray }) => {
  const [myCart, setmyCart] = useState([
    {
      name: "herfy",
      price: 30.0,
      numberOfThisItem: 2,
      resturantName: {
        nameArb: "هرفي",
        nameEN: "herfy-test",
      },
    },
  ]);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationEnabeled, setlocationEnabeled] = useState(false);
  const [openSearch, setopenSearch] = useState(false);
  const [visible, setVisible] = useState(false);
  const [searchResturant, setsearchResturant] = useState("");

  const [filterdResturants, setfilterdResturants] = useState([
    ...resturantsArray,
  ]);
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

  const applyFilterResturantsType = () => {
    let resArray;
    if (filterType == "all") {
      return setfilterdResturants([...resturantsArray]);
    }
    resArray = resturantsArray.filter((item) => {
      return item.type === filterType;
    });
    setfilterdResturants(resArray);
  };

  let filteResturants = [];
  if (EnglishLitters.test(searchResturant) == true) {
    filteResturants = filterdResturants.filter((resturant) =>
      resturant.nameEN.toLowerCase().includes(searchResturant.toLowerCase())
    );
  } else {
    filteResturants = filterdResturants.filter((resturant) =>
      resturant.nameArb.toLowerCase().includes(searchResturant.toLowerCase())
    );
  }

  return (
    <>
      <NavBar
        openMap={toggleOverlay}
        toogleOpenSearch={toogleOpenSearch}
        searchResturant={searchResturant}
        setsearchResturant={setsearchResturant}
        filterType={filterType}
        setfilterType={setfilterType}
        openSearch={openSearch}
        setFilterResturantsType={setFilterResturantsType}
        applyFilterResturantsType={applyFilterResturantsType}
      />
      <ResturantsLocations
        resturantsArray={filterdResturants}
        visible={visible}
        closeMap={toggleOverlay}
      />
      <ScrollView>
        {filteResturants.length == 0 && (
          <View
            style={{
              marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, color: "red" }}>
              لا يوجد عنصر مشابه...
            </Text>
          </View>
        )}
        {filteResturants.map((item) => (
          <View key={item.id}>
            <SingleResturant
              item={item}
              myCart={myCart}
              setmyCart={setmyCart}
            />
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default MainScreen;
