import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/header";
import Feed from "../components/feed";

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <Feed />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 50,
    backgroundColor: "white",
  },
});
