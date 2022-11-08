import { StyleSheet, Text } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Button, Spinner } from "native-base";
import { PHOTOS_API } from "../../config/constant";
import PhotosCard from "../../components/PhotosCard";
import { FlashList } from "@shopify/flash-list";
import Ionicons from "@expo/vector-icons/Ionicons";
const DetailScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [isScrollTopVisible, setScrollTopVisible] = useState(false);
  const [photosData, setPhotosData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = "";
  const flatList = useRef();
  const moveToTop = () => {
    flatList.current.scrollToIndex({ index: 0 });
    setScrollTopVisible(false);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const apiResponse = await fetch(PHOTOS_API);
        const data = await apiResponse.json();
        setPhotosData(data);
      } catch (error) {
        setIsError(true);
        setErrorMessage(error);
      }
      setLoading(false);
    };
    getData();
  }, []);

  if (loading == true)
    return <Spinner accessibilityLabel="Loading Photos" size={"lg"} />;

  return (
    <>
      {isError == false ? (
        <FlashList
          ref={flatList}
          onScrollBeginDrag={() => setScrollTopVisible(true)}
          keyExtractor={(item) => item.id}
          data={photosData}
          estimatedItemSize={200}
          renderItem={({ item }) => {
            return (
              <>
                <PhotosCard data={item} />
              </>
            );
          }}
        />
      ) : (
        <>
          <Text>Error !!</Text>
          <Text>{errorMessage}</Text>
        </>
      )}

      {isScrollTopVisible == true ? (
        <Button
          rounded={"full"}
          colorScheme={"darkBlue"}
          size={"sm"}
          w={120}
          rightIcon={<Ionicons name="arrow-up-circle" color="#fff" size={30} />}
          alignContent="center"
          alignSelf={"center"}
          position={"absolute"}
          bottom={10}
          onPress={() => moveToTop()}
        >
          Go to Top
        </Button>
      ) : null}
    </>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
