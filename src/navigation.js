import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "./components/header";

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

const Tab = createMaterialBottomTabNavigator();
const HomeScreen = () => {
  return <Header />;
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
            <MaterialCommunityIcons
              name="home-outline"
              color={"orange"}
              size={26}
            />
            // <Image source=""/>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Talk To Astrologer",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="forum" color={"orange"} size={26} />
            // <Image source=""/>
          ),
        }}
      />
      <Tab.Screen
        name="Compete"
        component={CompeteScreen}
        options={{
          tabBarLabel: "Ask Question",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="comment-question-outline"
              color={"orange"}
              size={26}
            />
            // <Image source=""/>
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: "Reports",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={"orange"} size={26} />
            // <Image source=""/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Navigation;
