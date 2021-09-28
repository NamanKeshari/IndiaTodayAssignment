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
      {/* <View style={styles.leftContainer}> */}
      <View style={styles.quoteContainer}>
        {/* <View>
            <Icon
              name="check-circle"
              size={18}
              // color={BlueColor[1]}
              // style={{ top: -2 }}
            />
          </View> */}
        <Text style={{ fontSize: 15 }}>
          "" There is no better boat than horoscope to help a man cross over the
          sea of life. ""
        </Text>
        {/* <View>
            <Icon
              name="check-circle"
              size={18}
              // color={BlueColor[1]}
              // style={{ top: -2 }}
            />
          </View> */}
        <Text style={{ textAlign: "center", color: "grey", marginTop: 10 }}>
          - Varhamihira
        </Text>
      </View>
      <Image
        source={require("../../assets/ganeshji.png")}
        style={styles.godImage}
      />
      {/* </View> */}
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
  godImage: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  leftContainer: {},
  quoteContainer: {
    width: "70%",
    // backgroundColor: "red",
  },
});
