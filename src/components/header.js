import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { IconButton } from "react-native-paper";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/hamburger.png")}
        style={styles.icon}
      />
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Image source={require("../../assets/profile.png")} style={styles.icon} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    height: 50,
    width: 70,
  },
  icon: {
    height: 23,
    width: 23,
  },
});
