import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./modules/Login/containers/login";
import Principal from "./modules/Principal/containers/principal";
import Register from "./modules/Register/containers/register";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "Titulo igual lo quito luego" }}
          name="Home"
          component={Principal}
        />

        <Stack.Screen 
          name="Login" 
          component={Login}
          options={{ header: 'null' }}
        />

        <Stack.Screen 
          name="Register" 
          component={Register}
          options={{ header: 'null' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}