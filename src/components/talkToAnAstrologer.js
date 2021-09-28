import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { Button } from "react-native-paper";

const AstrologerCard = () => {
  return (
    <View style={styles.astrologerCard}>
      <Image
        source={{
          uri: "https://starzspeak.com/uploads/2020/05/Bejan%20Daruwalla%20-%20Top%20Indian%20Astrologer.jpg",
        }}
        style={{
          height: 180,
          width: 160,
          alignSelf: "center",
          marginBottom: 10,
        }}
      />
      <View style={styles.topContainer}>
        <Text style={styles.astroName}>Arvind Shukla</Text>
        <Text style={styles.rating}>4.3</Text>
      </View>
      <Text style={styles.field}>Coffee Cup Reading</Text>
      <View style={styles.bottomContainer}>
        <Text style={styles.price}>₹ 500/min</Text>
        <Button
          style={styles.talkBtn}
          labelStyle={{ color: "white" }}
          color="#ee853c"
          mode="contained"
          uppercase={false}
        >
          Talk Now
        </Button>
      </View>
    </View>
  );
};

const TalkToAnAstrologer = () => {
  //   const [astrologerData, setAstrologerData] = useState([]);
  //   const getAstrologerFunc = async () => {
  //     const data = await getHoroscope();
  //     console.log(data.horoscopes);
  //     setHoroscopeData(data.horoscopes);
  //   };
  //   useEffect(() => getHoroscopeFunc(), []);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerHeader}>
        <Text style={styles.headingText}>Talk To An Astrologer</Text>
        <Button
          color="#ee853c"
          style={styles.seeAllBtn}
          uppercase={false}
          onPress={() => {}}
        >
          {"See All >"}
        </Button>
      </View>
      <Text style={styles.subheader}>
        Leading astrologers of India are just a phone call away. Our panel of
        astrologers not just provide solutions to your life problems but also
        guide you so that you can take the right path towards growth and
        prosperity.
      </Text>
      <ScrollView style={{ flexDirection: "row" }} horizontal={true}>
        <AstrologerCard />
        <AstrologerCard />
        <AstrologerCard />
        <AstrologerCard />
      </ScrollView>
    </View>
  );
};

export default TalkToAnAstrologer;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 16,
    marginVertical: 10,
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headingText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subheader: { fontSize: 15, fontWeight: "normal", marginBottom: 10 },
  sunsignText: {
    textAlign: "center",
    fontWeight: "700",
    marginVertical: 8,
  },
  astrologerCard: {
    marginVertical: 5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    padding: 10,
    width: 200,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 3,
  },
  topContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  astroName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  rating: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ee853c",
  },
  field: {
    marginVertical: 10,
    fontSize: 16,
    color: "grey",
  },
  bottomContainer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
