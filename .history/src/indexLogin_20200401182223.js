import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Login from "./modules/Login/containers/login";
import Principal from "./modules/Principal/containers/principal";
import Register from "./modules/Register/containers/register";
import Main from "./modules/Main/containers/main"; //Main screen after login

const Tabs = createBottomTabNavigator();
export default function indexLogin() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Stack.Screen
          options={{ title: "Main" }}
          name="Main"
          component={Main}
        />

        <Tabs.Screen  
          options={{ title: "Buscar" }}
          name="Buscar" 
          component={Main}
          options={{
            headerMode: 'none',
            headerTransparent: false,
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}