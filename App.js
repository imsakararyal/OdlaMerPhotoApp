import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import RootStackScreen from "./routes/RootStackNavigator";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
      <NativeBaseProvider>
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      </NativeBaseProvider>
  );
}
