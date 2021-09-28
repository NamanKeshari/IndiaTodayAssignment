import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Button } from "react-native-paper";
import { getHoroscope } from "../services/horoscopeServices";

const SunsignComponent = ({ data }) => {
  return (
    <View style={styles.horoscopeContainer}>
      {data.map((d, i) => {
        return (
          <View style={{ justifyContent: "center" }} key={i}>
            <Image
              source={{ uri: d.images.medium.imageUrl }}
              style={{ height: 100, width: 100 }}
            />
            <Text style={styles.sunsignText}>{d.name}</Text>
            <Text style={{ color: "grey" }}>{d.date}</Text>
          </View>
        );
      })}
    </View>
  );
};

const DailyHoroscopes = () => {
  const [horoscopeData, setHoroscopeData] = useState([]);
  const getHoroscopeFunc = async () => {
    const data = await getHoroscope();
    // console.log(data.horoscopes);
    setHoroscopeData(data.horoscopes);
  };
  useEffect(() => {
    getHoroscopeFunc();
  }, []);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerHeader}>
        <Text style={styles.headingText}>Daily Horoscopes</Text>
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
        Read your daily horoscope based on your sunsign, select your zodiac sign
        and give the right start to your day.
      </Text>
      <SunsignComponent data={horoscopeData} />
    </View>
  );
};

export default DailyHoroscopes;

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
  subheader: { fontSize: 15, fontWeight: "normal" },
  sunsignText: {
    textAlign: "center",
    fontWeight: "700",
    marginVertical: 8,
  },
  horoscopeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
});
