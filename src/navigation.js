import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "./containers/home";
import TalkToAstrologers from "./containers/talkToAstrologers";

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

const Tab = createMaterialBottomTabNavigator();
const HomeScreen = () => {
  return <Home />;
};
const SettingsScreen = () => {
  return <Text>SettingsScreen</Text>;
};
const CompeteScreen = () => {
  return <Text>CompeteScreen</Text>;
};
const FeedScreen = () => {
  return <Text>FeedScreen</Text>;
};
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/home.png")}
              style={{ height: "100%", width: "100%" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={TalkToAstrologers}
        options={{
          tabBarLabel: "Talk",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/talk.png")}
              style={{ height: "100%", width: "100%" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Compete"
        component={CompeteScreen}
        options={{
          tabBarLabel: "Ask Question",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/ask.png")}
              style={{ height: "100%", width: "100%" }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: "Reports",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../assets/reports.png")}
              style={{ height: "100%", width: "100%" }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Navigation;
