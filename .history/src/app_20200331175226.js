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
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            ),
          }}
        />

        <Stack.Screen 
          name = "Register" 
          component = {Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}