import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/header";

const Home = () => {
  return (
    <View style={styles.mainContainer}>
      <Header />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 40,
  },
});
