import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { capitalize, joinByComma } from "../helpers/utils";

const Astrologer = ({ astro }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 10,
      }}
    >
      <Image
        source={{
          uri:
            astro.profliePicUrl ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        }}
        style={{
          width: 100,
          height: 100,
          resizeMode: "cover",
        }}
      />
      <View style={{ width: 20 }} />
      <View>
        <Text>
          {capitalize(astro.firstName)} {capitalize(astro.lastName)}
        </Text>
        {astro?.skills?.length ? (
          <Text>{joinByComma(astro.skills)}</Text>
        ) : null}
        {astro?.languages?.length ? (
          <Text>{joinByComma(astro.languages)}</Text>
        ) : null}

        <Text>₹ {astro.minimumCallDurationCharges}/Min</Text>
        <View style={{ height: 10 }} />

        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#f28c49",
            paddingVertical: 10,
            paddingHorizontal: 20,
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <IoniconsIcon name="call-outline" size={20} color="#fff" />
          <Text
            style={{
              marginLeft: 10,
              color: "#fff",
            }}
          >
            Talk on Call
          </Text>
        </View>
      </View>
      <Text
        style={{
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        {astro.experience} years
      </Text>
    </View>
  );
};

export default Astrologer;

const styles = StyleSheet.create({});
