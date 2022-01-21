import React, { useState, useEffect } from "react";

import { View, StyleSheet, Dimensions, Image } from "react-native";
import { Button, Overlay, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

import MapView, { Marker, Callout } from "react-native-maps";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ResturantsLocations = ({ resturantsArray, visible, closeMap }) => {
  return (
    <View>
      <Overlay isVisible={visible} onBackdropPress={closeMap}>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            showsUserLocation={true}
            initialRegion={{
              latitude: 24.43167,
              longitude: 46.41792,
              latitudeDelta: 2.9222,
              longitudeDelta: 2.6421,
            }}
          >
            {resturantsArray.map((item) => (
              <View>
                <Marker
                  coordinate={{
                    latitude: item.location.latitude,
                    longitude: item.location.longitude,
                  }}
                >
                  <View>
                    <Image
                      source={item.image}
                      style={{ width: 20, height: 20 }}
                    />
                  </View>
                </Marker>
              </View>
            ))}
          </MapView>
        </View>
      </Overlay>
    </View>
  );
};
const styles = StyleSheet.create({
  mapContainer: {
    borderRadius: 20,
  },
  map: {
    width: Dimensions.get("window").width / 1.3,
    height: Dimensions.get("window").height / 1.3,
  },
  Marker: {
    backgroundColor: "red",
  },
});
export default ResturantsLocations;
