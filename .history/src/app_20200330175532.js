import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from '@react-navigation/stack';
import Principal from './modules/Principal/containers/principal';
import { NavigationNativeContainer } from "@react-navigation/native";

const PrincipalNavigator = createStackNavigator();

const PrincipalScreen = ({ navigation }) => {
  navigation.setOptions({
    headerRight: () => (
      <Button
        title="EDUARDO"
        onPress={() => {
          //save the changes
          navigation.replace("Home");
        }}
      />
    )
  })
}

export default function App() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "My Principal Screen" }}
          name="Principal"
          component={PrincipalScreen}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

