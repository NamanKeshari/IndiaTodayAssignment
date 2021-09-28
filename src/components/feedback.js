import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { getFeedbacks } from "../services/feedbackServices";

const FeedBackCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text>{data.feedback}</Text>

      <View
        style={{
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: 65,
            width: 65,
            backgroundColor: "#ee853c",
            borderRadius: 1000,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Ionicons name="account" /> */}
          <MaterialCommunityIconsIcon name="account" color="#fff" size={45} />
        </View>

        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          {data.name}
        </Text>
        <Text>{data.location}</Text>
      </View>
    </View>
  );
};

const FeedBack = () => {
  const [FeedbackData, setFeedbackData] = useState([]);
  const getFeedbackFunc = async () => {
    const data = await getFeedbacks();
    console.log(data.feedbacks);
    setFeedbackData(data.feedbacks);
  };
  useEffect(() => {
    getFeedbackFunc();
  }, []);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>Hear from our Happy Customers!</Text>
      {/* <FeedBackCard data={FeedbackData} /> */}
      <ScrollView horizontal>
        {FeedbackData.map((feedback, i) => {
          return <FeedBackCard data={feedback} key={i} />;
        })}
      </ScrollView>
    </View>
  );
};

export default FeedBack;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    paddingTop: 10,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  container: {
    padding: 20,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "column",
    width: 300,
    justifyContent: "space-evenly",
    marginRight: 20,
  },
});
