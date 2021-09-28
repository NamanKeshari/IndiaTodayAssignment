import React from "react";
import { RadioButton } from "react-native-paper";

import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

const MyRadioButton = ({ value, setChecked, checked, label }) => {
  return (
    <TouchableWithoutFeedback onPress={() => setChecked(value)}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <RadioButton
          value={value}
          color="#f28c49"
          status={checked === value ? "checked" : "unchecked"}
        />
        <Text style={{ fontSize: 18 }}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MyRadioButton;

const styles = StyleSheet.create({});
