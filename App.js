import "react-native-gesture-handler";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigations/AppNavigator";
import MainScreen from "./app/screens/MainScreen";
import SingleResturantScreen from "./app/screens/SingleResturantScreen";
import ResturantsData from "./app/data/ResturantsData";

export default function App() {
  return (
    // <NavigationContainer>
    //   <AppNavigator />
    // </NavigationContainer>

    <>
      <SingleResturantScreen resturant={ResturantsData.getResturants()} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
});
