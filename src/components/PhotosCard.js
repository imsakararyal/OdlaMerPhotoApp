import { StyleSheet, View, Image, Dimensions } from "react-native";
import React from "react";
import {
  HStack,
  VStack,
  Box,
  Text,
} from "native-base";
import ExpoFastImage from "expo-fast-image";
const PhotosCard = (props) => {
  const { id, title, thumbnailUrl } = props.data;
  const windowWidth = Dimensions.get("window").width;
  return (
    <Box borderBottomWidth="1" borderColor="muted.800" pr="10" py="5" mx="5">
      <HStack space={3}>
        {/**
         * Image is returning 401 error so expofastIMage used instead of Nativebase's Avatar
         * 
         * 
         */}
        <ExpoFastImage
          uri={thumbnailUrl}
          cacheKey={id}
          style={{ width: 50, height: 50, borderRadius: 50 / 2 }}
        />
        <VStack>
          <Text
            color="coolGray.800"
            bold
            numberOfLines={1}
            w={windowWidth - 100}
          >
            {title}
          </Text>

          <Text color="coolGray.600">{id}</Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default PhotosCard;

const styles = StyleSheet.create({});
