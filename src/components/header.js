import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { IconButton } from "react-native-paper";

const Header = () => {
  return (
    <View>
      <Image source={require("../../assets/hamburger.png")} />
      <Image />
      <IconButton />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
