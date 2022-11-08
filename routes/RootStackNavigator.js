import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../src/screens/Photos/HomeScreen";
import DetailScreen from "../src/screens/Photos/DetailScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const RootStack = createNativeStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        title: "Odla Mer Photos App",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
    />
    <RootStack.Screen
      name="DetailScreen"
      component={DetailScreen}
      options={({ route, navigation }) => ({
        headerLeft: () => (
          <Ionicons
            name="chevron-back"
            color={"#000"}
            size={40}
            onPress={() => navigation.goBack(null)}
          />
        ),
        title: "Odla Mer Photos",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#fff",
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      })}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
