import { StyleSheet } from "react-native";
import React from "react";
import { Button, Text, VStack, HStack } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView flex={1}>
      <VStack space={2} flex={1} alignItems="center" justifyContent="center">
        <Text fontSize="2xl" fontWeight={"semibold"}>
          Welcome to
        </Text>
        <Text fontSize="2xl" mb={10} fontWeight={"semibold"} space={5}>
          Odla Mer Photos App
        </Text>

        <Button
          onPress={() => {
            navigation.navigate("DetailScreen");
          }}
        >
          <HStack>
            <Text rounded={"full"} color={"#fff"} textAlign={"center"} mt={1}>
              Navigate Me to Photos
            </Text>
            <Ionicons name="chevron-forward" color={"#fff"} size={30} />
          </HStack>
        </Button>
      </VStack>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
