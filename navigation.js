import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

const Tab = createMaterialBottomTabNavigator();
const HomeScreen = () => {
  return <Text>HomeScreen</Text>;
};
const SettingsScreen = () => {
  return <Text>SettingsScreen</Text>;
};
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
export default Navigation;
