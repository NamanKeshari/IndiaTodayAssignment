import React, { useEffect } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { getAstros } from "../services/astroService";
import DailyHoroscopes from "./dailyHoroscopes";
import TalkToAnAstrologer from "./talkToAnAstrologer";

const Quote = () => {
  // useEffect(async () => {
  //   const data = await getAstros();
  //   console.log(data);
  // }, []);
  return (
    <View style={styles.container}>
      <View style={styles.quoteContainer}>
        <Text style={{ fontSize: 15 }}>
          "" There is no better boat than horoscope to help a man cross over the
          sea of life. ""
        </Text>
        <Text style={{ textAlign: "center", color: "grey", marginTop: 10 }}>
          - Varhamihira
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/ganeshji.png")}
          style={styles.godImage}
        />
      </View>
    </View>
  );
};

const Feed = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Quote />
      <DailyHoroscopes />
      <TalkToAnAstrologer />
    </ScrollView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 20,
  },
  container: {
    flexDirection: "row",
    marginHorizontal: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderColor: "blue",
    borderWidth: 1,
  },
  godImage: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  quoteContainer: {
    width: "70%",
  },
});
