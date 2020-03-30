import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../modules/Login/containers/login";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  navigation.setOptions({
    headerRight: () => (
      <Button
        title="Save"
        onPress={() => {
          //save the changes
          navigation.replace("Home");
        }}
      />
    )
  });
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>HomeScreen</Text>
      <Button
        title="Go To Settings Screen"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};


const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        SettingsScreen
      </Text>
      <Button title="Go To Home Screen" onPress={() => navigation.goBack()} />
    </View>
  );
};


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "My Home Screen" }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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