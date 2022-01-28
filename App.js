import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigations/AppNavigator";
import SingleMenuItemScreen from "./app/screens/singleResturant/singleMenuItemScreen";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={"light-content"} backgroundColor={"red"} />
      {Platform.OS == "ios" ? (
        <SafeAreaView>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </SafeAreaView>
      ) : (
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      )}

      {/* <SingleMenuItemScreen /> */}
    </View>

    /* <SingleResturantScreen resturant={ResturantsData.getResturants()} /> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
});
